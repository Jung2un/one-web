import React, { useEffect } from "react";
import styled from "styled-components";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Overlay $isOpen={isOpen} onClick={onCancel}>
      <ModalContent $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonContainer>
          <Button onClick={onCancel}>취소</Button>
          <Button $isConfirm onClick={onConfirm}>
            확인
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Overlay>
  );
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const ModalContent = styled.div<{ $isOpen: boolean }>`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  transform: scale(${(props) => (props.$isOpen ? 1 : 0.95)});
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
`;

const Title = styled.h3`
  color: #333;
  font-weight: 700;
  margin-top: 0.7rem;
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

const Message = styled.p`
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button<{ $isConfirm?: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${(props) => (props.$isConfirm ? "#ff6b6b" : "#e9ecef")};
  color: ${(props) => (props.$isConfirm ? "white" : "#495057")};

  &:hover {
    background: ${(props) => (props.$isConfirm ? "#ff5252" : "#dee2e6")};
  }

  &:active {
    transform: scale(0.98);
  }
`;
