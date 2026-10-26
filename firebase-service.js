// ==========================================================================
// Aura Productivity System • Firebase Authentication & Firestore Cloud Sync
// ==========================================================================

const FirebaseService = {
  FIREBASE_CONFIG_KEY: 'aura_firebase_config',
  CLOUD_SYNC_DEBOUNCE_MS: 1000,
  _syncTimeout: null,
  _unsubscribeListener: null,
  _isSyncingToCloud: false,
  _isApplyingRemoteUpdate: false,

  getConfig() {
    if (window.AURA_FIREBASE_CONFIG && typeof window.AURA_FIREBASE_CONFIG === 'object') {
      return window.AURA_FIREBASE_CONFIG;
    }
    try {
      const stored = localStorage.getItem(this.FIREBASE_CONFIG_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Erro ao carregar Firebase config do localStorage:', e);
    }
    return null;
  },

  saveConfig(config) {
    try {
      localStorage.setItem(this.FIREBASE_CONFIG_KEY, JSON.stringify(config));
      return this.init(config);
    } catch (e) {
      console.error('Erro ao salvar Firebase config:', e);
      return false;
    }
  },

  isConfigured() {
    const config = this.getConfig();
    return Boolean(config && config.apiKey && config.projectId && !config.apiKey.includes('SUA_API_KEY'));
  },

  init(customConfig = null) {
    if (typeof firebase === 'undefined') {
      console.warn('SDK do Firebase ainda não carregado.');
      return false;
    }

    const config = customConfig || this.getConfig();
    if (!config || !config.apiKey || !config.projectId) {
      this.updateCloudStatus('offline', 'Nuvem Não Configurada');
      return false;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      
      // Tentar habilitar persistência offline no Firestore
      try {
        firebase.firestore().enablePersistence({ synchronizeTabs: true }).catch(err => {
          if (err.code !== 'failed-precondition' && err.code !== 'unimplemented') {
            console.warn('Aviso de persistência Firestore:', err);
          }
        });
      } catch (err) {}

      this.updateCloudStatus('ready', 'Conectado à Nuvem');
      return true;
    } catch (e) {
      console.error('Falha ao inicializar Firebase:', e);
      this.updateCloudStatus('error', 'Erro de Conexão');
      return false;
    }
  },

  async loginWithGoogle() {
    if (!this.isConfigured()) {
      this.openConfigModal();
      return null;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      
      const auraUser = {
        id: user.uid,
        email: user.email,
        name: user.displayName || user.email.split('@')[0],
        picture: user.photoURL || '',
        provider: 'google',
        lastLogin: new Date().toISOString()
      };

      return auraUser;
    } catch (e) {
      console.error('Erro no login com Google (Firebase):', e);
      if (e.code === 'auth/popup-closed-by-user') {
        if (typeof showToast === 'function') showToast('Login cancelado', 'ℹ️');
      } else if (e.code === 'auth/unauthorized-domain') {
        alert('Este domínio ainda não está autorizado no Firebase Authentication.\n\nPara liberar:\n1. Acesse https://console.firebase.google.com\n2. Vá em Authentication > Settings > Authorized Domains\n3. Adicione "localhost" e o domínio da sua aplicação.');
      } else {
        alert('Falha ao autenticar com o Google via Firebase:\n' + (e.message || e.code));
      }
      return null;
    }
  },

  async logout() {
    if (this._unsubscribeListener) {
      this._unsubscribeListener();
      this._unsubscribeListener = null;
    }
    if (this.isConfigured() && typeof firebase !== 'undefined' && firebase.apps.length) {
      try {
        await firebase.auth().signOut();
      } catch (e) {}
    }
    this.updateCloudStatus('offline', 'Desconectado');
  },

  async fetchCloudState(uid) {
    if (!this.isConfigured() || typeof firebase === 'undefined' || !firebase.apps.length || !uid) return null;
    try {
      this.updateCloudStatus('syncing', 'Buscando da nuvem...');
      const db = firebase.firestore();
      const doc = await db.collection('aura_users').doc(uid).get();
      if (doc.exists) {
        const cloudData = doc.data();
        this.updateCloudStatus('synced', 'Nuvem Sincronizada');
        return cloudData.state || null;
      }
      this.updateCloudStatus('synced', 'Nuvem Pronta');
      return null;
    } catch (e) {
      console.error('Erro ao buscar dados do Firestore:', e);
      this.updateCloudStatus('error', 'Falha ao sincronizar');
      return null;
    }
  },

  saveCloudState(uid, state) {
    if (!this.isConfigured() || typeof firebase === 'undefined' || !firebase.apps.length || !uid || !state) return;
    if (this._isApplyingRemoteUpdate) return;

    clearTimeout(this._syncTimeout);
    this.updateCloudStatus('syncing', 'Sincronizando...');

    this._syncTimeout = setTimeout(async () => {
      try {
        this._isSyncingToCloud = true;
        const db = firebase.firestore();
        await db.collection('aura_users').doc(uid).set({
          state: state,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        this.updateCloudStatus('synced', 'Salvo na Nuvem');
      } catch (e) {
        console.error('Erro ao salvar no Firestore:', e);
        this.updateCloudStatus('error', 'Erro ao salvar na nuvem');
      } finally {
        this._isSyncingToCloud = false;
      }
    }, this.CLOUD_SYNC_DEBOUNCE_MS);
  },

  listenToCloudChanges(uid, onRemoteUpdateCallback) {
    if (!this.isConfigured() || typeof firebase === 'undefined' || !firebase.apps.length || !uid) return;
    
    if (this._unsubscribeListener) {
      this._unsubscribeListener();
    }

    try {
      const db = firebase.firestore();
      this._unsubscribeListener = db.collection('aura_users').doc(uid)
        .onSnapshot((doc) => {
          if (doc.metadata && doc.metadata.hasPendingWrites) {
            return;
          }
          if (this._isSyncingToCloud) {
            return;
          }
          if (doc.exists) {
            const data = doc.data();
            if (data && data.state) {
              this._isApplyingRemoteUpdate = true;
              try {
                if (typeof onRemoteUpdateCallback === 'function') {
                  onRemoteUpdateCallback(data.state);
                }
                this.updateCloudStatus('synced', 'Atualizado da Nuvem');
              } finally {
                this._isApplyingRemoteUpdate = false;
              }
            }
          }
        }, (error) => {
          console.warn('Erro no listener em tempo real do Firestore:', error);
        });
    } catch (e) {
      console.error('Falha ao configurar snapshot listener:', e);
    }
  },

  updateCloudStatus(status, text) {
    const badges = document.querySelectorAll('.cloud-sync-badge');
    badges.forEach(badge => {
      badge.className = `cloud-sync-badge status-${status}`;
      badge.innerHTML = `
        <span class="status-indicator-dot"></span>
        <span class="status-text">${text}</span>
      `;
    });
  },

  openConfigModal() {
    const modal = document.getElementById('firebaseConfigModal');
    if (modal) {
      const currentConfig = this.getConfig();
      const textarea = document.getElementById('firebaseConfigJson');
      if (textarea && currentConfig) {
        textarea.value = JSON.stringify(currentConfig, null, 2);
      }
      modal.classList.add('open');
    }
  }
};
