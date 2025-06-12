import styled from 'styled-components';

export const MemoListContainer = styled.div`
  margin-top: 1rem;
  max-height: 400px;
  overflow-y: auto;
`;

export const MemoListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const MemoCount = styled.span`
  color: #495057;
  font-size: 0.9rem;
`;

export const DeleteAllButton = styled.button`
  background: none;
  border: none;
  color: #868e96;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

export const MemoItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const MemoContent = styled.p`
  margin: 0;
  color: #495057;
  line-height: 1.5;
`;

export const MemoDate = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #868e96;
  margin-top: 0.5rem;
`;

export const MemoActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button<{ color?: string }>`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${props => props.color || '#868e96'};
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.color ? props.color : '#ff6b6b'};
  }
`;

export const MemoPlaceholder = styled.div`
  text-align: center;
  color: #868e96;
  padding: 2rem;
  font-size: 0.9rem;
`; 