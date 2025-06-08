import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
`;

export const ContentBox = styled.div`
    z-index: 0;
    width: 100%;
    max-width: 40rem;
    overflow: hidden;
    position: relative;
    text-align: center;
    padding: 3rem 2rem;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    &::before {
        content: "";
        inset: 0;
        z-index: 1;
        padding: 2px;
        position: absolute;
        border-radius: 16px;
        background: linear-gradient(90deg, #a29bfe, #ffeaa7, #a29bfe);
        background-size: 200% 200%;
        background-repeat: repeat;
        animation: borderSpin 5s linear infinite;
        mask: linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        box-sizing: border-box;
        pointer-events: none;
    }

    @keyframes borderSpin {
        0% {
            background-position: 0 50%;
        }
        100% {
            background-position: 200% 50%;
        }
    }
`;

export const TextWrap = styled.div`
    width: 100%;
    display: flex;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p<{ $isTyping: boolean }>`
    color: #333;
    width: 100%;
    font-weight: 700;
    line-height: 1.6;
    text-align: left;
    font-size: 1.7rem;
    white-space: pre-line;
    word-wrap: break-word;
    letter-spacing: -.1rem;

    .cursor {
        color: #000;
        font-size: 2rem;
        font-weight: bold;
        animation: ${blinkCursor} 1s infinite;
    }
`;

export const NextButton = styled.button`
    border: none;
    display: flex;
    padding: 0.9rem;
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 10px;
    justify-self: flex-end;
    transition: all 0.3s ease;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &:hover {
        transform: scale(0.95);
    }
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 6px;
    overflow: hidden;
    margin-top: 1rem;
    border-radius: 3px;
    background: #f0f0f0;
`;

export const ProgressBar = styled.div`
    height: 100%;
    background-color: #6c3483;
    transition: width 0.1s linear;
`;