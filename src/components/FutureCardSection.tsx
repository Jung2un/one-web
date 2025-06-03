"use client";

import {
  SectionWrapper,
  SectionTitle,
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
} from "./FutureCardSection.styled";
import { useTransition } from "react";
import { useTarotStore } from "@/store/useTrotSotre";

export default function FutureCardSection() {
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
    <SectionWrapper>
      <SectionTitle>오늘의 운세</SectionTitle>
      <CardSection>
        <CardInstruction>
          {isPending
            ? "⊂(´･◡･⊂ )∘˚˳°"
            : "카드를 선택하여 오늘의 운세를 확인하세요"
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
    </SectionWrapper>
  );
}