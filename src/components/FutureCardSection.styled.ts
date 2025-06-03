import styled, { keyframes, css } from "styled-components";

export const SectionWrapper = styled.section`
    display: flex;
    padding: 4rem 2rem;
    text-align: center;
    align-items: center;
    flex-direction: column;
`;

export const SectionTitle = styled.h2`
    color: #111;
    width: 100%;
    text-align: left;
    font-weight: 700;
    margin-bottom: 0;
    max-width: 1100px;
    font-size: 2.5rem;
    letter-spacing: -.1rem;

    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

export const CardSection = styled.div`
    width: 100%;
    margin-top: 3rem;
    min-height: 35rem;
    max-width: 1000px;
    border-radius: 20px;
    backdrop-filter: blur(15px);
    padding: 3rem 3rem 4rem 3rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    background-image:
            radial-gradient(circle at 20% 30%, rgba(253, 224, 71, var(--star-opacity, 0.1)) 1px, transparent 1px),
            radial-gradient(circle at 21% 31%, rgba(255, 255, 255, var(--star-opacity, 0.1)) 1px, transparent 1px),
            radial-gradient(circle at 40% 50%, rgba(253, 224, 71, var(--star-opacity, 0.1)) 1px, transparent 2px),
            radial-gradient(circle at 41% 51%, rgba(255, 255, 255, var(--star-opacity, 0.1)) 1px, transparent 1px),
            linear-gradient(135deg, #240046, #3f37c9);
    background-size:
            205px 110px,
            250px 155px,
            121px 150px,
            200px 210px,
            100% 100%;
    background-repeat: repeat;
    background-position: center;
    animation: twinkle 3s ease-in-out infinite;

    @keyframes twinkle {
        0%, 100% {
            --star-opacity: 1;
        }
        25% {
            --star-opacity: 0.8;
        }
        50% {
            --star-opacity: 0.5;
        }
        75% {
            --star-opacity: 0.8;
        }
    }
`;

export const CardInstruction = styled.p`
    color: #fff;
    display: flex;
    min-height: 3rem;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const flipAnimation = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(180deg);
    }
`;

const glowPulse = keyframes`
    0%, 100% {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    50% {
        box-shadow: 0 8px 30px rgba(126, 34, 206, 0.8), 0 0 20px rgba(79, 70, 229, 0.6);
    }
`;

export const Card = styled.div<{
  $isFlipped?: boolean;
  $isAnimating?: boolean;
  $isDisabled?: boolean;
}>`
    color: #fff;
    display: flex;
    height: 180px;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    border-radius: 16px;
    flex-direction: column;
    justify-content: center;

    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.3s, box-shadow 0.3s;
    background-image: linear-gradient(to bottom right, rgba(79, 70, 229, 1), rgba(126, 34, 206, 1));

    ${props => props.$isAnimating && css`
        animation: ${flipAnimation} 0.8s ease-in-out, ${glowPulse} 0.8s ease-in-out;
        transform-style: preserve-3d;
    `}

    ${props => props.$isDisabled && css`
        opacity: 1;
        filter: grayscale(50%);
    `}

    &:hover {
        ${props => !props.$isDisabled && css`
            transform: scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        `}
    }
`;

export const CardIcon = styled.div`
    font-size: 2rem;
    margin-bottom: 0.5rem;
`;

export const SelectedCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SelectedCard = styled.div`
    width: 100%;
    padding: 4rem;
    max-width: 600px;
    border-radius: 24px;
    backdrop-filter: blur(15px);
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(126, 34, 206, 0.9));
    box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    animation: cardAppearAnimation 0.5s ease-out;
    
    @keyframes cardAppearAnimation {
        0% {
            opacity: 0;
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 767px) {
        margin: 0 1rem;
        padding: 3rem 2rem;
    }
`;

export const SelectedCardContent = styled.div`
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
`;

export const FortuneText = styled.p`
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;

    @media (max-width: 767px) {
        font-size: 1.25rem;
        margin-bottom: 2rem;
    }
`;

export const ResetButton = styled.button`
    border: none;
    color: #240046;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, #fff, #f8f9fa);

    &:hover {
        transform: scale(1.01);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 767px) {
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
    }
`;