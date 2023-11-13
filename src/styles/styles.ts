import { createGlobalStyle, styled } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Julius Sans One", sans-serif;
    text-decoration: none;
}

body {
    background-color: ${variables.corPrincipal};
    color: #fff;
}


`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
