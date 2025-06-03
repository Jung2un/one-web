import styled from "styled-components";

export const MainSectionWrapper = styled.section`
    gap: 10px;
    color: white;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        height: auto;
        padding: 1.5rem;
        min-height: 80vh;
    }
`;

export const BackgroundImage = styled.div`
  inset: 0;
  z-index: -1;
  position: absolute;

    img {
    object-fit: cover;
  }
`;

export const Title = styled.h1`
    margin: 1rem 0;
    font-size: 5rem;
    line-height: 1.2;
    font-weight: bold;
    white-space: pre-line;
    transition: transform 0.2s ease;
    animation: fadeIn 2s ease 0.3s 1 forwards;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }

    @media (max-width: 767px) {
        font-size: 4rem;
    }

    @media (max-width: 539px) {
        font-size: 3rem;
    }
`;

export const Subtitle = styled.p`
    opacity: 0;
    font-weight: 700;
    line-height: 1.2;
    font-size: 1.7rem;
    margin-bottom: 2rem;
    letter-spacing: -.01em;
    background: linear-gradient(108deg,#0079d0 0,#9e52d8 32%,#da365c 84%,#d04901 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideUp 1s ease-out 0.7s 1 forwards;

    @keyframes slideUp {
        0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(15px);
        }
        100% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0px);
        }
    }

    @media (max-width: 539px) {
        font-size: 1.2rem;
    }
`;


export const ScrollIcon = styled.div`
    bottom: 20px;
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    animation: bounce 2s infinite;

    @keyframes bounce {
        0%, 20%, 40%, 60%, 100% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(-5px);
        }
    }
`;