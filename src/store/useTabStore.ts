import { create } from 'zustand';

interface TabState {
  currentTab: 'dailyPick' | 'futureCard' | 'uxLab';
  setCurrentTab: (tab: 'dailyPick' | 'futureCard' | 'uxLab') => void;
}

export const useTabStore = create<TabState>((set) => ({
  currentTab: 'dailyPick',
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));
