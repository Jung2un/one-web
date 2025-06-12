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

  /* Modal & Alert Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%;
    text-align: center;
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }

  .modal-message {
    margin-bottom: 1.5rem;
    color: #666;
    line-height: 1.5;
  }

  .modal-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  /* Modal Animation */
  .modal-enter {
    transition: all 0.3s ease-out;
  }

  .modal-enter-from {
    opacity: 0;
  }

  .modal-enter-to {
    opacity: 1;
  }

  .modal-leave {
    transition: all 0.2s ease-in;
  }

  .modal-leave-from {
    opacity: 1;
  }

  .modal-leave-to {
    opacity: 0;
  }

  /* Modal Content Animation */
  .modal-content-enter-from {
    opacity: 0;
    transform: scale(0.95);
  }

  .modal-content-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .modal-content-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .modal-content-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

export default GlobalStyle;
