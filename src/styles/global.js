import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.FONT.POPPINS};

  }

  button {
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(1.1);
  }
`;