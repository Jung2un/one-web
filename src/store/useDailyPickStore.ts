import { create } from "zustand";

interface DailyPickState {
  contentIndex: number;
  animationKey: number; // 애니메이션 트리거용 키
  isTyping: boolean; // 입력 중 여부
  typingProgress: number; // 입력 진행률 (0 ~ 100)
  nextContent: (length: number) => void;
  startTyping: () => void;
  finishTyping: () => void;
  setTypingProgress: (progress: number) => void;
}

export const useDailyPickStore = create<DailyPickState>((set) => ({
  contentIndex: 0,
  animationKey: 0,
  isTyping: false, // 초기값을 false로 변경
  typingProgress: 0,

  nextContent: (length: number) =>
    set((state) => ({
      contentIndex: (state.contentIndex + 1) % length,
      animationKey: state.animationKey + 1,
      isTyping: true,
      typingProgress: 0,
    })),

  startTyping: () => set({ isTyping: true, typingProgress: 0 }),
  finishTyping: () => set({ isTyping: false, typingProgress: 100 }),
  setTypingProgress: (progress: number) =>
    set({ typingProgress: progress }),
}));