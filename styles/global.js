import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 14px;
    }
    
    * {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.base};
        color: #4c4c4c;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;