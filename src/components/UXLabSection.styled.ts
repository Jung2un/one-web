import styled from "styled-components";
import Link from "next/link";

export const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0f4ff, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const BackLink = styled(Link)`
  align-self: flex-start;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #0070f3;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ModeText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const UXButton = styled.button`
  background: #4facfe;
  color: #fff;
  font-size: 2rem;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
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
  gap: 2rem;
  max-width: 900px;
  margin-bottom: 2rem;
`;

export const UsageCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 2rem;
  width: 200px;
  text-align: center;
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
  font-size: 1.2rem;
  font-weight: bold;
`;

export const UsageTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const UsageDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
`;

