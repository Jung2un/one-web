import { useRef } from 'react';
import { useUXLabStore } from '@/store/useUXLabStore';

export const useUXLabInteraction = () => {
  const {
    showMemo,
    showWeather,
    showNews,
    resetAll,
  } = useUXLabStore();

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const longPressRef = useRef<NodeJS.Timeout | null>(null);
  const clickCountRef = useRef(0);
  const isLongPressActiveRef = useRef(false);

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    if (isLongPressActiveRef.current) return;

    clickCountRef.current += 1;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (clickCountRef.current === 1) {
        resetAll();
        showMemo();
      }
      clickCountRef.current = 0;
    }, 300);
  };

  // 더블클릭 이벤트 핸들러
  const handleDoubleClick = () => {
    if (isLongPressActiveRef.current) return;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    clickCountRef.current = 0;
    resetAll();
    showWeather();
  };

  // 마우스 다운 이벤트 핸들러
  const handleMouseDown = () => {
    isLongPressActiveRef.current = false;

    longPressRef.current = setTimeout(() => {
      isLongPressActiveRef.current = true;
      resetAll();
      showNews();
    }, 500);
  };

  // 마우스 업 이벤트 핸들러
  const handleMouseUp = () => {
    if (longPressRef.current) {
      clearTimeout(longPressRef.current);
    }
    setTimeout(() => {
      isLongPressActiveRef.current = false;
    }, 100);
  };

  return {
    handleClick,
    handleDoubleClick,
    handleMouseDown,
    handleMouseUp,
  };
}; 