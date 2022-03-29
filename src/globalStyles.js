import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
body ,*{
    padding: 0;
    margin: 0 ;
    box-sizing: border-box;
    font-family:'Source Sans Pro', Arial, sans-serif;
    
    
}
`;

export default GlobalStyle;
