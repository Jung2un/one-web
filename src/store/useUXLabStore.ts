import { create } from "zustand";

interface UXLabState {
  mode: string;
  isMemoVisible: boolean;
  isWeatherVisible: boolean;
  isNewsVisible: boolean;
  setMode: (newMode: string) => void;
  showMemo: () => void;
  showWeather: () => void;
  showNews: () => void;
  resetAll: () => void;
}

export const useUXLabStore = create<UXLabState>((set) => ({
  mode: "메모",
  isMemoVisible: false,
  isWeatherVisible: false,
  isNewsVisible: false,
  setMode: (newMode) => set({ mode: newMode }),
  showMemo: () => set({ 
    isMemoVisible: true, 
    isWeatherVisible: false, 
    isNewsVisible: false,
    mode: "메모" 
  }),
  showWeather: () => set({ 
    isMemoVisible: false, 
    isWeatherVisible: true, 
    isNewsVisible: false,
    mode: "날씨" 
  }),
  showNews: () => set({ 
    isMemoVisible: false, 
    isWeatherVisible: false, 
    isNewsVisible: true,
    mode: "뉴스" 
  }),
  resetAll: () => set({
    isMemoVisible: false,
    isWeatherVisible: false,
    isNewsVisible: false
  })
}));
