import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Space Mono', monospace;
        background-color: ${({ theme }) => theme.colors.body};
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        /* background-color: red; */
    }
    div {
        background-color: ${({ theme }) => theme.colors.container}
    }
    span {
        background-color: ${({ theme }) => theme.colors.body}
    }
    button {
        background-color: ${({ theme }) => theme.colors.button}
    }
    input {
        background-color: ${({ theme }) => theme.colors.container}
    }
    h1 {
        font-weight: 700;
    }
    p {
        font-weight: 400;
    }
`;

export default GlobalStyles;