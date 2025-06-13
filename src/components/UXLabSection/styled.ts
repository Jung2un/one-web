import styled, { keyframes, css } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
`;

export const SubTitle = styled.p`
  color: #666;
  margin-top: 0;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div<{ $isAnyFeatureActive: boolean }>`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const UXButton = styled.button<{ $isAnyFeatureActive?: boolean }>`
  width: 80px;
  height: 80px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
  transition: transform 0.2s;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  ${props => !props.$isAnyFeatureActive && css`
    animation: ${bounce} 2s infinite;
  `}

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const CloseButton = styled.button<{ $isAnyFeatureActive?: boolean }>`
  width: 40px;
  height: 40px;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  position: absolute;
  left: calc(50% + 50px);
  top: 50%;
  transform: translate(0, -50%) translateX(-10px);
  pointer-events: none;
  display: none;
  
  ${ButtonWrapper}:hover & {
    display: block;
    opacity: 1;
    transform: translate(0, -50%) translateX(0);
    pointer-events: auto;
  }
  
  &:hover {
    background: #ff6b6b;
    color: white;
  }

  &:active {
    transform: translate(0, -50%) scale(0.95);
  }
`;

export const UsageSection = styled.div`
  gap: 2rem;
  display: flex;
  margin: 2rem 0;
  justify-content: center;
`;

export const UsageCard = styled.div`
  padding: 1rem;
  min-width: 120px;
  text-align: center;
  border-radius: 8px;
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const UsageNumber = styled.div`
  width: 24px;
  height: 24px;
  color: white;
  display: flex;
  border-radius: 50%;
  align-items: center;
  background: #6e8efb;
  margin: 0 auto 0.5rem;
  justify-content: center;
`;

export const UsageTitle = styled.h4`
  margin: 0;
  color: #333;
`;

export const UsageDescription = styled.p`
  color: #666;
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
`;

export const MemoContainer = styled.div`
  padding: 2rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 500px;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MemoForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
`;

export const MemoInput = styled.textarea`
  flex: 1;
  padding: 1rem;
  resize: vertical;
  min-height: 100px;
  max-height: 200px;
  border-radius: 8px;
  font-family: inherit;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`;

export const MemoSubmitButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 1.5rem;
  background: #6e8efb;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background: #5d7de8;
  }
`;

export const MemoList = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100% - 200px);
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MemoPlaceholder = styled.div`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  transform: translateY(100px);
`;

export const MemoListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

export const MemoCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const DeleteAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #888;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ff6b6b;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MemoItem = styled.div`
  padding: 1rem;
  position: relative;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 4px -2px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    box-shadow: 3px 6px 6px -2px rgba(0, 0, 0, 0.15);
  }
`;

export const MemoContent = styled.p`
  color: #333;
  margin: 0 0 0.5rem;
  padding-right: 5rem;
  white-space: pre-wrap;
`;

export const MemoDate = styled.span`
  color: #888;
  font-size: 0.8rem;
`;

export const MemoActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  transform: translateY(-15%);
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.color || '#ff6b6b'};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const WeatherContainer = styled.div`
  padding: 2rem;
  background: white;
  min-height: 500px;
  max-height: 500px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .location {
    color: #666;
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const WeatherContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
`;

export const WeatherCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  width: 180px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }

  .temperature {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.25rem;
  }
`;

export const NewsContainer = styled.div`
  padding: 2rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 500px;
  max-height: 500px;
  overflow: hidden;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

export const NewsGrid = styled.div`
  width: 100%;
  height: 370px;
  background: #fff;
  border-radius: 16px;
  display: grid;
  height: 420px;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  place-items: center;
  padding: 1rem 0;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const NewsCard = styled.a`
  display: block;
  padding: 2rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  text-decoration: none;
  transition: transform 0.2s;
  aspect-ratio: 1.2;

  &:hover {
    transform: translateY(-2px);
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #495057;
    margin-bottom: 0.5rem;
  }

  .meta {
    font-size: 0.9rem;
    color: #868e96;
    margin-bottom: 0.5rem;
  }

  p {
    color: #495057;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const WeatherHeader = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .location {
    color: #666;
    font-size: 0.9rem;
  }
`;