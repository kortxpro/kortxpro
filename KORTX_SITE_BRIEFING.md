# KORT.X — SITE BRIEFING
## Instruções para Desenvolvimento do Site

---

# 🎯 OBJETIVO

Criar um site institucional/comercial bilíngue (PT-BR e EN-US) para a **KORT.X** — empresa de reestruturação de operações empresariais através de Inteligência Artificial.

**Posicionamento:** "Não vendemos ferramenta — reestruturamos operações inteiras usando IA como fundação."

---

# 📋 DADOS DA EMPRESA

| Item | Valor |
|------|-------|
| **Logo** | KORT.X (com quadrado azul) |
| **Nome em texto** | Kortex |
| **Domínio** | kortx.pro |
| **Tagline** | "Tudo começa no KORTEX." |
| **Tagline EN** | "Everything starts at KORTEX." |

---

# 🎨 IDENTIDADE VISUAL

## Cores

```css
:root {
  /* Primárias */
  --azul-quadrado: #00A3FF;    /* O quadrado azul - destaque principal */
  --azul-escuro: #0A1628;      /* Texto principal, logo dark */
  --background-dark: #0D1117;  /* Fundo escuro com rede neural */
  
  /* Neutros */
  --branco: #FFFFFF;
  --cinza-claro: #F8FAFC;      /* Background alternativo */
  --cinza-texto: #8B949E;      /* Texto secundário */
  --cinza-borda: #30363D;      /* Bordas em dark mode */
  
  /* Gradientes */
  --gradient-neural: linear-gradient(135deg, #0D1117 0%, #161B22 100%);
  --gradient-accent: linear-gradient(135deg, #00A3FF 0%, #0066CC 100%);
}
```

## Tipografia

```css
/* Headings */
font-family: 'Inter', sans-serif;
font-weight: 700; /* Bold */

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400; /* Regular */

/* Código/Técnico */
font-family: 'JetBrains Mono', monospace;
```

## Estilo Visual

- **Dark mode como padrão** — tech, sofisticado
- **Rede neural como background** — linhas conectando pontos
- **Quadrado azul** como elemento de destaque
- **Minimalista** com muito espaço em branco (ou preto)
- **Animações sutis** — fade in, parallax leve
- **Glassmorphism** em cards (opcional)

## Referências Visuais

Sites para inspiração:
- linear.app (dark, animações elegantes)
- vercel.com (clean, moderno)
- stripe.com (profissional, confiável)
- raycast.com (tech, sofisticado)

---

# 📁 STACK RECOMENDADO

```
Framework: Next.js 14 (App Router)
Linguagem: TypeScript
Styling: Tailwind CSS
Componentes: Shadcn/UI
Animações: Framer Motion
i18n: next-intl
Icons: Lucide React
Deploy: Vercel
```

---

# 📄 ESTRUTURA DE PÁGINAS

## 1. HOME (`/`)

### Hero Section
```
Background: Rede neural animada (partículas conectadas)
Logo: KORT.X grande, centralizado
Tagline: "Tudo começa no KORTEX."
Subtítulo: "O ponto central de decisão para empresas que querem crescer com IA."
CTA Principal: "Diagnóstico Gratuito"
CTA Secundário: "Conhecer a Solução"
```

### Seção: O Problema
```
Título: "Sua empresa está perdendo dinheiro em silêncio"

Cards com os problemas:
- Leads esfriando sem resposta
- Marketing manual, sem escala
- Decisões baseadas em feeling
- Sistemas que não conversam
- Fornecedores nunca renegociados
- Clientes sumindo sem você perceber

Fechamento: "Você sabe que precisa de IA. Mas não sabe por onde começar."
```

### Seção: A Solução
```
Título: "A KORT.X não vende ferramenta. Reestrutura operações."

Fluxo visual (timeline/steps):
1. Diagnóstico Gratuito → Identificamos seus gargalos
2. Consultoria → Desenhamos o plano
3. Núcleos → Ativamos a IA certa
4. Orquestração → Tudo funciona junto
5. Aprendizado → O sistema melhora sozinho

Destaque: "Cada negócio é único. Montamos a combinação certa de núcleos para sua operação."
```

### Seção: Os Núcleos
```
Título: "Núcleos de Inteligência"
Subtítulo: "Ative apenas o que você precisa"

Grid de cards (hover revela descrição):
- Core — O cérebro central
- Closer — Vendas inteligentes
- Growth — Marketing com IA
- Insights — Analytics preditivo
- Advisor — Estratégia com IA
- Bridge — Integração enterprise
- Engage — Comunicação inteligente
- Supply — Compras e negociação
- Commerce — Gestão de e-commerce
- Flow — Operações e logística
- Loyalty — Retenção e fidelização
- + Novos — Criados para sua necessidade

CTA: "Ver detalhes de cada núcleo"
```

### Seção: Como Funciona (Modelo Comercial)
```
Título: "Transparência total"

3 etapas:

1. DIAGNÓSTICO GRATUITO
   "Analisamos sua operação e mostramos onde você está perdendo dinheiro."
   Badge: Gratuito

2. CONSULTORIA
   "Desenhamos o plano: quais núcleos, em que ordem, qual resultado esperado."
   
3. IMPLEMENTAÇÃO
   "Duas formas de contratar:"
   
   Card A: VALOR FECHADO
   "Investimento definido, parcelas fixas, entrega completa."
   
   Card B: PERFORMANCE
   "Entrada reduzida + 15% do ganho gerado por 18 meses."
   "Você só paga mais quando ganha mais."
```

### Seção: Resultados
```
Título: "Resultados reais"

Métricas em destaque (animadas, contando):
- "Até 95% de automação operacional"
- "Até 30% de redução de custos"
- "Até 50% mais conversão"
- "ROI médio de 400%"

Ou: Case resumido de cliente (se tiver)
```

### CTA Final
```
Background: Gradient ou rede neural
Título: "Pronto para descobrir onde sua empresa está perdendo dinheiro?"
CTA: "Agendar Diagnóstico Gratuito"
Nota: "Sem compromisso. Sem enrolação."
```

### Footer
```
Logo KORT.X
Links de navegação
Redes sociais (se tiver)
Seletor de idioma (PT | EN)
Copyright
```

---

## 2. NÚCLEOS (`/nucleos` | `/nucleus`)

### Hero
```
Título: "Núcleos de Inteligência"
Subtítulo: "Cada núcleo resolve um problema específico. Ative apenas o que você precisa."
```

### Lista de Núcleos
Para cada núcleo, um card expandível ou seção:
```
Nome: KORT.X Closer
Subtítulo: "Vendas Inteligentes"
Descrição: "Para negócios onde leads morrem por falta de velocidade ou personalização."

Funcionalidades (lista):
- Atendimento 24/7 via WhatsApp, chat, ou qualquer canal
- Detecção automática de perfil do cliente
- Motor de descontos dinâmico
- Tratamento de objeções inteligente
- Upsell/cross-sell baseado em histórico
- Recuperação de oportunidades perdidas

Quando ativar:
"Equipe de vendas sobrecarregada, leads esfriando, atendimento fora de horário, conversão baixa."
```

Repetir estrutura para todos os núcleos.

### CTA
```
"Não sabe quais núcleos precisa?"
CTA: "Agendar Diagnóstico Gratuito"
```

---

## 3. COMO FUNCIONA (`/como-funciona` | `/how-it-works`)

### O Processo
```
Timeline visual detalhada:

ETAPA 1: DIAGNÓSTICO
- O que é: Análise gratuita da sua operação
- O que você recebe: Relatório de gargalos e oportunidades
- Duração: 1-2 semanas
- Custo: Gratuito

ETAPA 2: CONSULTORIA
- O que é: Plano detalhado de implementação
- O que você recebe: Mapa de núcleos + cronograma + projeção de resultados
- Duração: 1-2 semanas
- Custo: Sob consulta

ETAPA 3: IMPLEMENTAÇÃO
- O que é: Ativação e integração dos núcleos
- O que você recebe: Sistema funcionando + treinamento
- Duração: 1-6 meses (depende da complexidade)
- Custo: Valor fechado OU Performance

ETAPA 4: OPERAÇÃO
- O que é: Sistema rodando e evoluindo
- O que você recebe: Dashboard + relatórios + suporte
- Duração: Contínuo
- Custo: Incluso no contrato
```

### Modelos de Contratação
```
Comparativo lado a lado:

VALOR FECHADO          |  PERFORMANCE
-----------------------|------------------------
Preço definido         |  Entrada reduzida
Parcelas fixas         |  + 15% do ganho
Entrega completa       |  Por 18 meses
Você é dono            |  Risco compartilhado
Ideal: tem caixa       |  Ideal: quer dividir risco
```

### FAQ
```
Perguntas frequentes sobre o processo
```

---

## 4. SOBRE (`/sobre` | `/about`)

### Nossa História
```
"A KORT.X nasceu de um problema real."

Texto sobre origem:
- Nasceu dentro de um e-commerce que precisava escalar
- Criamos a solução que não existia no mercado
- O resultado foi tão transformador que decidimos compartilhar
```

### O Nome
```
"Por que KORT.X?"

- KORT.X remete a córtex cerebral — o centro de decisão
- O ponto azul é um nó neural
- Cada conexão inteligente entre dados, análise, decisão e ação
- "Tudo começa no KORTEX."
```

### Visão
```
"Transformar a forma como empresas operam, usando IA como fundação — não como acessório."
```

---

## 5. CONTATO (`/contato` | `/contact`)

### Formulário de Diagnóstico
```
Campos:
- Nome completo
- Email corporativo
- Empresa
- Cargo
- Telefone/WhatsApp
- Faturamento mensal (faixa)
- Principal desafio (dropdown ou texto)
- Como conheceu a KORT.X

CTA: "Solicitar Diagnóstico Gratuito"
```

### Informações
```
Email: contato@kortx.pro
WhatsApp: +55 21 XXXX-XXXX
Localização: Rio de Janeiro, Brasil
```

---

# 🌐 INTERNACIONALIZAÇÃO

## Estrutura de URLs

```
PT-BR (padrão):
- kortx.pro/
- kortx.pro/nucleos
- kortx.pro/como-funciona
- kortx.pro/sobre
- kortx.pro/contato

EN-US:
- kortx.pro/en
- kortx.pro/en/nucleus
- kortx.pro/en/how-it-works
- kortx.pro/en/about
- kortx.pro/en/contact
```

## Arquivos de Tradução

```
/messages/pt-BR.json
/messages/en-US.json
```

---

# 📱 RESPONSIVIDADE

## Breakpoints

```css
Mobile: 0 - 640px
Tablet: 641px - 1024px
Desktop: 1025px - 1440px
Large: 1441px+
```

## Considerações Mobile

- Menu hamburger
- Hero simplificado
- Cards empilhados
- CTAs full-width
- Rede neural simplificada ou estática

---

# ⚡ PERFORMANCE

## Requisitos

- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Core Web Vitals "Good"

## Otimizações

- Imagens em WebP/AVIF
- Lazy loading
- Code splitting
- Font subsetting
- Rede neural em canvas otimizado

---

# 🔍 SEO

## Meta Tags

```html
<!-- PT-BR Home -->
<title>KORT.X — Reestruture sua empresa com IA | Tudo começa no KORTEX</title>
<meta name="description" content="A KORT.X não vende ferramenta — reestrutura operações inteiras usando inteligência artificial como fundação. Diagnóstico gratuito.">

<!-- EN-US Home -->
<title>KORT.X — Restructure your business with AI | Everything starts at KORTEX</title>
<meta name="description" content="KORT.X doesn't sell tools — we restructure entire operations using artificial intelligence as foundation. Free diagnosis.">
```

## Open Graph

```html
<meta property="og:image" content="/og-image.png">
<meta property="og:type" content="website">
```

---

# 🎬 ANIMAÇÕES

## Hero

- Rede neural com partículas flutuando e conectando
- Logo fade in
- Tagline typing effect (opcional)

## Scroll

- Fade in on scroll para seções
- Cards aparecem em sequência
- Números contando (métricas)

## Hover

- Cards elevam com sombra
- Botões com transição de cor
- Links com underline animado
- Quadrado azul pulsa levemente

## Micro-interactions

- Loading states
- Form validation feedback
- Success messages

---

# 📁 ESTRUTURA DE PASTAS

```
kortx-site/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              # Home
│   │   ├── nucleos/page.tsx      # Núcleos
│   │   ├── como-funciona/page.tsx
│   │   ├── sobre/page.tsx
│   │   └── contato/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                       # Shadcn
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Nucleus.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Results.tsx
│   │   └── CTA.tsx
│   ├── effects/
│   │   └── NeuralNetwork.tsx     # Animação de rede neural
│   └── shared/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── messages/
│   ├── pt-BR.json
│   └── en-US.json
├── public/
│   ├── images/
│   ├── logo/
│   │   ├── kortx-dark.svg
│   │   ├── kortx-light.svg
│   │   └── kortx-icon.svg
│   └── og-image.png
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

# ✅ CHECKLIST DE ENTREGA

## Fase 1 — MVP

- [ ] Setup Next.js + TypeScript + Tailwind
- [ ] Configurar next-intl (PT-BR + EN-US)
- [ ] Criar componente de rede neural (background)
- [ ] Página Home completa
- [ ] Página Núcleos
- [ ] Página Como Funciona
- [ ] Página Sobre
- [ ] Página Contato com formulário
- [ ] Header com navegação + language switcher
- [ ] Footer
- [ ] Responsivo em todos os breakpoints
- [ ] SEO básico
- [ ] Deploy na Vercel

## Fase 2 — Polimento

- [ ] Animações com Framer Motion
- [ ] Otimização de performance
- [ ] Integração formulário com CRM/email
- [ ] Analytics (GA4, Hotjar)
- [ ] Testes cross-browser

---

# 🚀 COMANDOS PARA INICIAR

```bash
# Criar projeto
npx create-next-app@latest kortx-site --typescript --tailwind --app

# Instalar dependências
npm install framer-motion next-intl lucide-react

# Instalar Shadcn/UI
npx shadcn-ui@latest init

# Rodar em desenvolvimento
npm run dev
```

---

# 📚 ARQUIVOS COMPLEMENTARES

- **KORTX_BUSINESS_DOCUMENTATION.md** — Visão completa da empresa
- **KORTX_SITE_COPY.md** — Todos os textos em PT-BR e EN-US

---

*Briefing criado para desenvolvimento do site KORT.X — Fevereiro 2026*
