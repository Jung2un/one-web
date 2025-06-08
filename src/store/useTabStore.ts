import { create } from 'zustand';

interface TabState {
  currentTab: 'dailyPick' | 'tarotCard' | 'uxLab';
  setCurrentTab: (tab: 'dailyPick' | 'tarotCard' | 'uxLab') => void;
}

export const useTabStore = create<TabState>((set) => ({
  currentTab: 'dailyPick',
  setCurrentTab: (tab) => set({ currentTab: tab }),
}));
