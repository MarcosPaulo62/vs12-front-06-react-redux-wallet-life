import { createGlobalStyle } from "styled-components";

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
      green: "#B2C199",
      red: "#C1A099",
      blue: "#99B5C1",
    },
  };
  

export const GlobalStyle = createGlobalStyle`

    body{
        overflow-x: hidden;
    }

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

    a{
        text-decoration: none;
        color: inherit;
    }

      ::-webkit-scrollbar {
        width: 12px; 
    }

    ::-webkit-scrollbar-track {
        background-color: ${ColorsTheme.color.khaki}; 
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${ColorsTheme.color.jet};
        border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${ColorsTheme.color.black};
        cursor: pointer;
    }

`;

