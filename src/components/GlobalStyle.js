import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('https://img.freepik.com/premium-photo/home-office-desk-workspace-with-blank-paper-sheets-notebook-pampas-grass_408798-8814.jpg?w=740'); /* Замените на вашу ссылку */
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
