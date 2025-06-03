import { create } from "zustand";

interface Fortune {
  text: string;
  icon: string;
}

interface TarotState {
  flipped: boolean;
  fortune: string;
  icon: string;
  flipCard: () => void;
  updateFortune: () => void;
}

const fortunes: Fortune[] = [
  { text: "숨겨진 재능을 발견하게 될 특별한 하루입니다 ✨", icon: "💎" },
  { text: "오늘 하루 모든 일이 순조롭게 풀릴 것입니다 🎯", icon: "🎯" },
  { text: "좋은 기회가 찾아올 거예요 🍀", icon: "🍀" },
];

export const useTarotStore = create<TarotState>((set, get) => ({
  flipped: false,
  fortune: "숨겨진 재능을 발견하게 될 특별한 하루입니다 ✨",
  icon: "🔮",

  flipCard: () => set((state) => ({ flipped: !state.flipped })),

  updateFortune: () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newFortune = fortunes[randomIndex];
    set({ fortune: newFortune.text, icon: newFortune.icon });
  },
}));
