"use client";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: 'Pretendard';
      font-display: swap;
      font-weight: 45 920;
      src: url('/fonts/PretendardVariable.woff2') format('woff2');
  }
    
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    color: #333;
    background-color: #fff;
    font-family: 'Pretendard', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
