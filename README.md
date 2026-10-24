# 🍏 Aura • Sistema de Produtividade Estilo Apple

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMoreirabmm%2Fordem)

> *"A simplicidade é o grau máximo de sofisticação."* — Steve Jobs

O **Aura** é um sistema de produtividade pessoal completo, minimalista e equilibrado, construído com base nas diretrizes de design da Apple (*Human Interface Guidelines*), trazendo a fluidez do iOS e macOS diretamente para o seu navegador, sem necessidade de servidores, cadastros ou instalações complexas.

---

## 🌟 Principais Recursos

### 1. 🎯 Os Três Anéis de Atividade Diária
Inspirado nos anéis do Apple Watch, o Aura equilibra seu dia em 3 pilares essenciais:
* **Anel Azul (Foco & Trabalho):** Progresso de conclusão das tarefas prioritárias profissionais do dia.
* **Anel Verde (Saúde & Corpo):** Hidratação (meta de 2.500 ml com botão de +250ml) e exercícios físicos.
* **Anel Laranja (Hábitos & Mente):** Rituais diários, leituras e constância.

### 2. 🗂️ As 5 Grandes Áreas da Vida Especializadas
Ao contrário de to-do lists caóticas, tudo no Aura é equipado com módulos dedicados de alto nível:
* 💼 **Trabalho & Demandas (Kanban Trello):**
  * Colunas: *A Fazer*, *Em Andamento*, *Em Revisão* e *Concluído*.
  * Suporte a Drag & Drop nativo entre colunas e botões de avanço rápido de status em 1 clique.
  * Etiquetas de prioridade (Alta, Média, Baixa) e prazos semanais.
* 🏃 **Saúde & Performance:**
  * **Dieta & Macros:** Metas diárias de calorias, proteínas, carboidratos e gorduras com barras de progresso visuais e checklist de refeições do dia.
  * **Treinos Personalizáveis & Cargas:** Controle de divisão de treino (A, B, C, D) com atribuição de dias da semana (ex: Segunda & Quinta), edição de nomes de exercícios, séries, repetições e botões de ajuste de peso/carga (`+` / `-` 2,5 kg).
  * **Corridas & Cardio:** Registro de distância (km), tempo (min), cálculo automático de pace (min/km), calorias gastas e volume semanal acumulado.
* 💰 **Finanças Pessoais (Planilha Apple Numbers):**
  * Livro-caixa com registro detalhado de *Entradas* (verde) e *Gastos* (vermelho).
  * Painel KPI com Total de Entradas, Total de Despesas, Saldo Líquido e Taxa de Poupança calculados em tempo real.
  * Filtros dinâmicos por tipo (Todos, Entradas, Gastos) e categorias (Trabalho, Moradia, Alimentação, Lazer, etc.).
* 🧠 **Conhecimento & Mente:**
  * **Estante de Livros:** Acompanhamento de leitura com páginas lidas, porcentagem de conclusão e botões de avanço rápido (`+5`, `+10`, `+20` páginas).
  * **Cursos & Certificações:** Acompanhamento de progresso de aulas concluídas e status de certificação.
  * **Mural de Insights:** Quadro visual destacando as principais lições e notas registradas de cada livro.
* 🌿 **Vida Pessoal & Rotina (Google Agenda Integrada):**
  * Incorporação direta do **Google Calendar** na própria aba com alternador de modos: *Semana*, *Mês* e *Compromissos*.
  * Rituais rápidos em 1 clique: Rotina Matinal (07:30), Almoço Saudável (12:30), Foco Profundo (14:30), Treino (18:00) e Leitura Noturna (21:30).
  * Edição completa de compromissos na própria aba (título, horário, duração, local e categoria) com botão de sincronização direta no Google Agenda (`calendar.google.com`).

### 3. ⏱️ Modo de Concentração (Pomodoro, Lista de Tarefas & Histórico por Dias)
* **Cronômetro Circular Apple Watch:** Anéis translúcidos de progresso com modos de 25m (Foco), 50m (Imersão), 5m (Pausa Curta) e 15m (Pausa Longa).
* **Lista de Tarefas em Foco:**
  * Painel lateral dedicado para gerenciar as demandas que você vai executar durante os blocos de concentração.
  * Seleção de **Demanda Ativa** (`🎯 Em Foco`), destacada no topo do cronômetro.
  * **Contador de Períodos Concluídos por Tarefa:** Cada tarefa exibe seus ciclos `🍅 X ciclos (Y min)`, com steppers `+` e `-` para adicionar ou ajustar períodos.
* **Metrificação & Histórico ao Longo dos Dias (Estilo Apple Screen Time / Fitness):**
  * **Gráfico de Barras dos Últimos 7 Dias:** Barras com altura proporcional aos minutos focados a cada dia (Seg a Dom), destacando o dia atual em gradiente vibrante.
  * **Painel KPI:** Total focado hoje (ciclos e minutos), média diária na semana, total acumulado e dias de constância ativa.
  * **Linha do Tempo de Sessões Recentes:** Registro contínuo de cada período concluído com data, horário, tarefa trabalhada e duração.
* **Feedback Sonoro:** Micro-chimes sutis gerados nativamente via **Web Audio API** ao iniciar, pausar e concluir períodos.

### 4. 📈 Hábitos Diários com Gráfico & Histórico de 30 Dias (Estilo Apple Fitness)
* **Visão Geral & Métricas de Constância:** Banner KPI calculando hábitos ativos, hábitos cumpridos hoje, taxa média de constância mensal e melhor sequência recorde.
* **Acompanhamento Rápido Semanal:** Checklist interativo de 7 dias (`Seg` a `Dom`) em cada card para marcar o dia atual com 1 clique e manter a sequência viva.
* **Gráficos & Histórico Individual por Hábito:**
  * Botão **`📈 Ver Gráfico & Histórico`** em cada hábito.
  * **Gráfico de Consistência Semanal:** Comparativo em barras das últimas 4 semanas (`Sem -3`, `Sem -2`, `Sem Passada`, `Esta Semana`) com volume de dias concluídos.
  * **Heatmap / Grade Interativa de 30 Dias:** 30 quadradinhos arredondados representando os últimos 30 dias. Dias concluídos brilham na cor da categoria e você pode clicar em qualquer quadrado para registrar ou ajustar dias passados.
  * **Painel Estatístico do Hábito:** Sequência atual (`🔥`), recorde histórico (`🏆`), taxa de sucesso (`🎯`) e total de conclusões no mês.

### 5. ⚡ Captura Rápida (Estilo Spotlight / Mac)
* Pressione `⌘K` (Mac) ou `Ctrl+K` (Windows/Linux) em qualquer lugar para abrir a barra de comando instantânea.
* Digite a tarefa, selecione a área e salve apenas teclando `Enter`.

### 6. 🔒 100% Privado e Offline-First
* Nenhum dado é enviado para a nuvem. Tudo fica guardado no `localStorage` do seu dispositivo.
* Ferramenta de **Exportar Backup (JSON)** e **Importar Backup** com 1 clique para transferir entre dispositivos.

---

## 🚀 Como Executar

### Método Mais Rápido (Sem Instalação)
Basta dar **duplo clique** no arquivo:
`C:\Users\guimo\.gemini\antigravity\scratch\apple-productivity-system\index.html`

Ele abrirá instantaneamente em seu navegador favorito (Chrome, Edge, Safari, Firefox).

### Como Instalar como Aplicativo Nativo (PWA)
* **No Windows (Microsoft Edge ou Google Chrome):**
  1. Abra o arquivo no navegador.
  2. Na barra de endereço, clique no ícone **"Instalar Aura"** (ou menu `...` > *Aplicativos* > *Instalar este site como um aplicativo*).
  3. Ele passará a abrir em uma janela independente e com ícone próprio na barra de tarefas!
* **No iPhone / iPad (Safari):**
  1. Abra o sistema e clique no botão **Compartilhar** (ícone do quadrado com a seta para cima).
  2. Selecione **"Adicionar à Tela de Início"**.
* **No Mac (Safari no macOS Sonoma ou superior):**
  1. Menu *Arquivo* > **"Adicionar ao Dock"**.

---

## ⌨️ Atalhos de Teclado

| Atalho | Ação |
| :--- | :--- |
| `⌘K` ou `Ctrl+K` | Abrir Spotlight / Captura Rápida de Ação |
| `D` | Alternar entre Modo Escuro e Claro |
| `Enter` | Salvar ação rápida |
| `ESC` | Fechar qualquer janela ou modal aberto |

---

## 🎨 Design System Apple

* **Cores do Sistema:** System Blue, Mint Green, Warning Orange, Coral Red, Indigo e Apple Grays.
* **Tipografia:** Família SF Pro Display & Text com renderização antialiased.
* **Materiais & Profundidade:** Glassmorphism com `backdrop-filter: blur()`, sombras suaves e contornos translúcidos sutis.
