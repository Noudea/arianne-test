import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color : ${props => (props.colors ? props.colors.background : 'black')}
  }
  
  * {
  box-sizing: border-box;
    }

`;
 
export default GlobalStyle;