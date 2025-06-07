import styled from "styled-components";

export const SubTitle = styled.p`
    font-size: 1rem;
    color: #888;
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
`;

export const ModeText = styled.p`
    font-size: 1rem;
    color: #333;
    margin: 0;
`;

export const UXButton = styled.button`
    background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
    color: #fff;
    font-size: 1.5rem;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.9;
        transform: scale(1.05);
    }
`;

export const UsageSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    max-width: 900px;
`;

export const UsageCard = styled.div`
    background: #f9f9f9;
    border-radius: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    padding: 1.5rem;
    width: 220px;
    text-align: center;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`;

export const UsageNumber = styled.div`
    background: #4facfe;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const UsageTitle = styled.h3`
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.5rem;
`;

export const UsageDescription = styled.p`
    font-size: 0.9rem;
    color: #666;
`;
