import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import 'tailwindcss';

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    background-color: red !important;
  }
`;
