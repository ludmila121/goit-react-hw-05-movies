import 'normalize.css'; /* bring in normalize.css styles */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h2 {
    padding-left: 20px;
}
img {
    width: 300px;
    margin: 10px;
}
`;
