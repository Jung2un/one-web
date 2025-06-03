import styled from "styled-components";

export const SectionWrapper = styled.section`
    display: flex;
    min-height: 100vh;
    padding: 4rem 2rem;
    text-align: center;
    background: #e0f7fa;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const SectionTitle = styled.h2`
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
`;

export const CardContainer = styled.div`
    perspective: 1000px;
`;

export const Card = styled.div<{ $flipped: boolean }>`
    color: white;
    width: 300px;
    height: 400px;
    display: flex;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardContent = styled.div`
    padding: 2rem;
    backface-visibility: hidden;
    transform-style: preserve-3d;
`;

export const CardIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`;

export const RefreshButton = styled.p`
    opacity: 0.8;
    margin-top: 1rem;
    font-size: 0.9rem;
`;
