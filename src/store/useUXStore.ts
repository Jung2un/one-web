import { create } from 'zustand';

interface UXStore {
  mode: 'memo' | 'weather' | 'news';
  setMode: (mode: 'memo' | 'weather' | 'news') => void;
}

export const useUXStore = create<UXStore>((set) => ({
  mode: 'memo',
  setMode: (mode) => set({ mode }),
}));
