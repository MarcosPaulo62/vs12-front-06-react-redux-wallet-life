import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }

       
    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ol, ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: 0;
    }

   img {
        max-width: 100%;
    }

    

   
`;

export const ColorsTheme = {
  color: {
    brownSugar: "#AA714F",
    white: "#FFFFFF",
    khaki: "#C1A999",
    jet: "#393838",
    black: "#000000",
    offWhite: "#F5F5F5",
    alabaster: "#E4E4DB",
    error: "#FC0000",
    success: "#36C76C",
  },
};
