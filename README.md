# MyResume

Um portfólio profissional moderno, desenvolvido em React + Vite, focado em apresentar habilidades, experiências e certificações de QA de forma visual, responsiva e animada.

![Preview](public/vite.svg)

## ✨ Demonstração

Acesse a versão online: [https://seu-link-vercel.vercel.app](https://seu-link-vercel.vercel.app)

## 🚀 Tecnologias Utilizadas
- React 18
- Vite
- Framer Motion (animações)
- Chart.js & react-chartjs-2 (gráficos)
- CSS Modules
- React Router DOM
- Styled Components
- EmailJS (formulário de contato)

## 📁 Estrutura do Projeto
- `src/components/` — Componentes reutilizáveis
- `src/pages/sections/` — Seções principais da página
- `src/data/` — Dados de skills e experiências
- `public/` — Arquivos estáticos

## 🛠️ Scripts
- `yarn dev` — Inicia o ambiente de desenvolvimento
- `yarn build` — Gera build de produção
- `yarn preview` — Visualiza build localmente
- `yarn lint` — Executa análise de lint

## 💻 Como rodar localmente
1. Clone o repositório
2. Instale as dependências:
   ```powershell
   yarn install
   ```
3. Inicie o projeto:
   ```powershell
   yarn dev
   ```
4. Acesse `http://localhost:5173` no navegador.

## 🌐 Deploy
O deploy pode ser feito facilmente na [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/). Lembre-se de configurar as variáveis de ambiente no painel da plataforma:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_CONTACT_EMAIL`

## 🔒 Segurança
- Nunca exponha dados sensíveis (senhas, secrets) no front-end ou em variáveis com prefixo `VITE_`.
- Apenas chaves públicas e dados não sensíveis devem ser usados no front-end.

## 📬 Contato
O formulário de contato envia mensagens diretamente para o seu email usando EmailJS. Os dados do formulário não são armazenados em banco de dados.

## 📄 Licença
Este projeto é open-source, sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar!

---

> **Nota:** Durante o build, pode aparecer um warning relacionado ao uso de `eval` no pacote `lottie-web`. Isso ocorre porque a biblioteca `lottie-react` (usada para animações Lottie) depende internamente do `lottie-web`, que utiliza `eval` em sua implementação. Esse aviso não impede o funcionamento do projeto e não é um erro, apenas um alerta de segurança/compressão. Caso precise de um ambiente totalmente livre de `eval`, considere alternativas de animação ou acompanhe atualizações dessas bibliotecas.
