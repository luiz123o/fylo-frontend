import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;

}
body {
  background-color: hsl(218, 28%, 13%);

}
button {
  cursor: pointer;
}

`;
