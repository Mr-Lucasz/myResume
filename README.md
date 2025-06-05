# MyResume

Projeto de portfólio profissional desenvolvido em React + Vite, com foco em apresentação de habilidades, experiências e certificações de QA.

## Principais Tecnologias
- React 18
- Vite
- Framer Motion (animações)
- Chart.js & react-chartjs-2 (gráficos)
- CSS Modules (componentização de estilos)
- React Router DOM
- Styled Components

## Estrutura de Componentes
- Modularização por responsabilidade (ex: Skills/SkillBar, Skills/SoftSkillPill, Skills/CertificationCard)
- Separação de estilos por componente via CSS Modules
- Dados centralizados em `src/data/`

## Scripts
- `npm run dev` — inicia o ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run preview` — visualiza build localmente
- `npm run lint` — executa análise de lint

## Como rodar localmente
1. Clone o repositório
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o projeto:
   ```sh
   npm run dev
   ```

Acesse `http://localhost:5173` no navegador.

## Organização
- `src/components/` — componentes reutilizáveis
- `src/pages/sections/` — seções principais da página
- `src/data/` — dados de skills e experiências
- `public/` — arquivos estáticos

## Observações
- O projeto utiliza animações e gráficos para visualização de competências.
- Cada componente possui seu próprio arquivo de estilos para melhor manutenção e escalabilidade.

## Aviso sobre build e dependências

> **Nota:** Durante o build, pode aparecer um warning relacionado ao uso de `eval` no pacote `lottie-web`. Isso ocorre porque a biblioteca `lottie-react` (usada para animações Lottie) depende internamente do `lottie-web`, que utiliza `eval` em sua implementação. Esse aviso não impede o funcionamento do projeto e não é um erro, apenas um alerta de segurança/compressão. Caso precise de um ambiente totalmente livre de `eval`, considere alternativas de animação ou acompanhe atualizações dessas bibliotecas.

---

Template inicial baseado em [Vite](https://vitejs.dev/) + [React](https://react.dev/).
