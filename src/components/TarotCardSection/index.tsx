"use client";

import {
  CardSection,
  CardInstruction,
  CardContainer,
  Card,
  CardIcon,
  SelectedCardContainer,
  SelectedCard,
  SelectedCardContent,
  FortuneText,
  ResetButton,
} from "./styled";
import { useTarotStore } from "@/store/useTrotSotre";
import { useEffect, useState, useTransition } from "react";

function useDebouncedPending(pending: boolean, delay = 1000) {
  const [debouncedPending, setDebouncedPending] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (pending) {
      setDebouncedPending(true);
    } else {
      timer = setTimeout(() => setDebouncedPending(false), delay);
    }

    return () => clearTimeout(timer);
  }, [pending, delay]);

  return debouncedPending;
}

export default function TarotCardSection() {
  const {
    cards,
    selectedCardIndex,
    isCardSelected,
    isAnyCardAnimating,
    flipCard,
    updateFortune,
    resetCards
  } = useTarotStore();
  const [isPending, startTransition] = useTransition();
  const debouncedPending = useDebouncedPending(isPending, 1000);

  const handleCardClick = (index: number) => {
    // selected, 애니메이션, transition 실행 중이면 무시
    if (isPending || isCardSelected || selectedCardIndex !== null) return;

    startTransition(() => {
      flipCard(index);
      setTimeout(() => {
        updateFortune(index);
      }, 1000);
    });

  };

  // 선택된 카드 정보
  const selectedCard = selectedCardIndex !== null ? cards[selectedCardIndex] : null;

  return (
    <>
      <CardSection>
        <CardInstruction>
          {debouncedPending
            ? "로딩 중 입니다.."
            : "카드를 선택하여 오늘의 운세를 확인하세요 ⊂(´･◡･⊂ )∘˚˳°"
          }
        </CardInstruction>
        {!isCardSelected ? (
          // 선택 화면
          <CardContainer>
            {cards.map((card, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(index)}
                $isFlipped={card.flipped}
                $isAnimating={card.isAnimating}
                $isDisabled={isPending || isAnyCardAnimating}
              >
                <CardIcon>{card.icon}</CardIcon>
              </Card>
            ))}
          </CardContainer>
        ) : (
          // 결과 화면
          <SelectedCardContainer>
            <SelectedCard>
              <SelectedCardContent>
                <CardIcon style={{fontSize: '4rem', marginBottom: '2rem'}}>
                  {selectedCard?.icon}
                </CardIcon>
                <FortuneText>{selectedCard?.fortune}</FortuneText>
                <ResetButton onClick={resetCards}>
                  다시 선택하기
                </ResetButton>
              </SelectedCardContent>
            </SelectedCard>
          </SelectedCardContainer>
        )}
      </CardSection>
    </>
  );
}