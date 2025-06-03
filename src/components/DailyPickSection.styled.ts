import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 4rem 2rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  color: #333;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ContentBox = styled.div`
  cursor: pointer;
  overflow: hidden;
  max-width: 600px;
  padding: 2rem 3rem;
  white-space: nowrap;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  color: #333;
  font-weight: 500;
  font-size: 1.5rem;
  animation: ${typing} 3s steps(40, end) infinite;
`;
