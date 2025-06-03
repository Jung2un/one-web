import { create } from "zustand";

interface Fortune {
  text: string;
  icon: string;
}

interface CardState {
  flipped: boolean;
  fortune: string;
  icon: string;
  isAnimating: boolean; // 애니메이션 상태 추가
}

interface TarotState {
  cards: CardState[]; // 카드 정보
  selectedCardIndex: number | null; // 선택된 카드 인덱스
  isCardSelected: boolean; // 카드 선택 완료 상태
  isAnyCardAnimating: boolean; // 다른 카드 클릭 방지
  flipCard: (index: number) => void; // 카드 뒤집기
  updateFortune: (index: number) => void; // 카드 내용 업데이트
  resetCards: () => void; // 초기화 함수
}

const fortunes = [
  { text: "오늘은 숨겨진 재능이 빛을 발할 수 있는 날이에요. 예상치 못한 상황에서 특별한 능력을 발견하게 될 거예요. 스스로를 믿고 새로운 도전을 시도해보세요!", icon: "💎" },
  { text: "하루의 시작부터 모든 일이 순조롭게 풀릴 기운이 가득합니다. 새로운 기회가 찾아오고, 그 기회가 당신의 노력을 더욱 빛나게 해줄 거예요.", icon: "🎯" },
  { text: "당신의 하루에 행운의 바람이 불어옵니다. 예상치 못한 곳에서 좋은 기회가 찾아올 테니, 열린 마음으로 받아들여 보세요.", icon: "🍀" },
  { text: "오늘은 새로운 만남이 당신에게 행운을 가져다줄 거예요. 누군가의 한마디가 당신의 삶을 변화시킬 수 있으니 주위를 잘 살펴보세요.", icon: "🌟" },
  { text: "창의력이 넘치는 하루가 될 거예요. 평소에는 생각지 못했던 아이디어가 샘솟듯 떠오를 테니, 주저하지 말고 새로운 도전에 뛰어들어 보세요.", icon: "🎨" },
  { text: "긍정적인 변화가 시작되는 날입니다. 변화는 두렵기도 하지만, 오늘은 당신이 그 변화를 즐길 수 있는 용기가 생길 거예요.", icon: "🌱" },
];

const initialCards = (): CardState[] =>
  Array.from({ length: 6 }, () => ({
    flipped: false,
    fortune: "카드를 선택하세요!",
    icon: "🔮",
    isAnimating: false,
  }));

export const useTarotStore = create<TarotState>((set, get) => ({
  cards: initialCards(),
  selectedCardIndex: null,
  isCardSelected: false,
  isAnyCardAnimating: false,

  flipCard: (index) => {
    const state = get();

    // 이미 카드가 선택되었거나 애니메이션 중이면 클릭 무시
    if (state.isCardSelected || state.isAnyCardAnimating) return;

    set((state) => {
      const updatedCards = [...state.cards];
      updatedCards[index].flipped = true;
      updatedCards[index].isAnimating = true;

      return {
        cards: updatedCards,
        isAnyCardAnimating: true,
        selectedCardIndex: index
      };
    });
  },

  updateFortune: (index) => {
    set((state) => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const newFortune = fortunes[randomIndex];
      const updatedCards = [...state.cards];

      updatedCards[index].fortune = newFortune.text;
      updatedCards[index].icon = newFortune.icon;
      updatedCards[index].isAnimating = false;

      return {
        cards: updatedCards,
        isCardSelected: true,
        isAnyCardAnimating: false
      };
    });
  },

  resetCards: () => {
    set({
      cards: initialCards(),
      selectedCardIndex: null,
      isCardSelected: false,
      isAnyCardAnimating: false,
    });
  },
}));
