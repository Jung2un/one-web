import { create } from "zustand";

interface UXLabState {
  mode: string;
  setMode: (newMode: string) => void;
}

export const useUXLabStore = create<UXLabState>((set) => ({
  mode: "메모",
  setMode: (newMode) => set({ mode: newMode }),
}));
