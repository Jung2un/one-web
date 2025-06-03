import { create } from "zustand";

interface DailyPickState {
  contentIndex: number;
  nextContent: (length: number) => void;
}

export const useDailyPickStore = create<DailyPickState>((set) => ({
  contentIndex: 0,
  nextContent: (length: number) =>
    set((state) => ({
      contentIndex: (state.contentIndex + 1) % length,
    })),
}));
