import React, { useEffect } from 'react';
import styled from 'styled-components';

interface AlertProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const AlertWrapper = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 9999;
  display: flex;
  align-items: center;
  color: #40c057;
  background: #fff;
  font-size: 0.9rem;
  padding: 12px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const SuccessIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #40c057;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '✓';
    color: white;
    font-size: 12px;
  }
`;

export default function Alert({ message, duration = 2000, onClose }: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AlertWrapper>
      <SuccessIcon />
      {message}
    </AlertWrapper>
  );
} 