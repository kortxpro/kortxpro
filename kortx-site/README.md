# KORT.X - Site Institucional

Site institucional da KORT.X com 3 propostas de design para aprovacao.

## Stack Tecnico

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Animacoes:** Framer Motion
- **i18n:** next-intl (PT-BR / EN-US)
- **Icons:** Lucide React

## Estrutura do Projeto

```
kortx-site/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── page.tsx              # Home (Proposta A - Neural)
│   │       ├── propostas/            # Seletor de propostas
│   │       ├── proposta-b/           # Proposta B - Corporate
│   │       ├── proposta-c/           # Proposta C - Minimal
│   │       ├── nucleos/              # Pagina de Nucleos
│   │       ├── como-funciona/        # Como Funciona
│   │       ├── sobre/                # Sobre
│   │       └── contato/              # Contato
│   ├── components/
│   │   ├── ui/                       # Componentes UI base
│   │   ├── layout/                   # Header, Footer, Logo
│   │   ├── sections/                 # Secoes das paginas
│   │   └── effects/                  # Efeitos visuais (NeuralNetwork, etc)
│   ├── i18n/                         # Configuracao i18n
│   ├── lib/                          # Utilitarios
│   └── messages/                     # Traducoes PT-BR e EN-US
└── public/
    └── logo/                         # Logos SVG
```

## As 3 Propostas

### Proposta A - NEURAL (Padrao)
- **URL:** `/pt-BR` ou `/en-US`
- **Conceito:** Dark, futurista, tech-forward
- **Caracteristicas:**
  - Background dark com rede neural animada
  - Glassmorphism com blur
  - CTAs com gradiente e glow
  - Animacoes moderadas (parallax, typing, count up)

### Proposta B - CORPORATE
- **URL:** `/pt-BR/proposta-b` ou `/en-US/proposta-b`
- **Conceito:** Light, corporativo, confiavel
- **Caracteristicas:**
  - Background branco/cinza
  - Cards com sombras sutis
  - CTAs azul solido
  - Animacoes sutis (fade-in, hover)

### Proposta C - MINIMAL
- **URL:** `/pt-BR/proposta-c` ou `/en-US/proposta-c`
- **Conceito:** Minimalista, editorial, bold
- **Caracteristicas:**
  - Secoes alternando dark/light
  - Tipografia extra bold
  - Quase sem animacoes
  - Botoes outline

## Como Executar

```bash
# Instalar dependencias
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Producao
npm start
```

## URLs Importantes

- **Seletor de Propostas:** `/pt-BR/propostas`
- **Proposta A (Neural):** `/pt-BR` (home padrao)
- **Proposta B (Corporate):** `/pt-BR/proposta-b`
- **Proposta C (Minimal):** `/pt-BR/proposta-c`

## Idiomas

O site suporta:
- Portugues (Brasil): `/pt-BR/*`
- Ingles (EUA): `/en-US/*`

O idioma padrao e PT-BR.

## Cores da Marca

```css
--azul-quadrado: #00A3FF;    /* Cor principal - quadrado do logo */
--azul-escuro: #0A1628;      /* Texto em light mode */
--background-dark: #0D1117;  /* Fundo dark mode */
```

## Proximos Passos

1. [ ] Escolher proposta final
2. [ ] Refinar animacoes e transicoes
3. [ ] Integrar formulario de contato
4. [ ] Configurar analytics
5. [ ] Deploy na Vercel
