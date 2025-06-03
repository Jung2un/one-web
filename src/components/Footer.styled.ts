import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    color: #fff;
    background-color: #1c1f26;
`;

export const FooterContainer = styled.div`
    gap: 2rem;
    display: flex;
    padding: 2rem 1rem;
    align-items: center;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const FooterSection = styled.div`
    max-width: 300px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export const FooterTitle = styled.h4`
  gap: 1rem;
  color: #fff;
  display: flex;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  line-height: 1.5;
  margin: 0 0 4rem 0;
  font-size: 0.95rem;
`;

export const ScrollToTopButton = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: white;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const IconButton = styled.button`
  padding: 0;
  border: none;
  color: inherit;
  cursor: pointer;
  background: none;
`;

export const IconWrapper = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 0.3rem;

  a {
    color: #fff;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;