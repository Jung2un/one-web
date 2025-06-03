"use client";

import {
  SectionWrapper,
  SectionTitle,
  CardContainer,
  Card,
  CardContent,
  CardIcon,
  CardTitle,
  CardDescription,
  RefreshButton,
} from "./FutureCardSection.styled";
import {useTarotStore} from "@/store/useTrotSotre";

export default function FutureCardSection() {
  const { flipped, fortune, icon, flipCard, updateFortune } = useTarotStore();

  const handleCardClick = () => {
    if (!flipped) {
      flipCard();
    } else {
      flipCard();
      setTimeout(() => {
        updateFortune();
      }, 800); // transition 시간 맞추기
    }
  };

  return (
    <SectionWrapper>
      <SectionTitle>오늘의 운세</SectionTitle>
      <CardContainer>
        <Card $flipped={flipped} onClick={handleCardClick}>
          <CardContent>
            <CardIcon>{icon}</CardIcon>
            {!flipped ? (
              <>
                <CardTitle>타로카드</CardTitle>
                <CardDescription>클릭하여 운세를 확인하세요</CardDescription>
              </>
            ) : (
              <>
                <CardDescription>{fortune}</CardDescription>
                <RefreshButton>다시 클릭하여 새로운 운세</RefreshButton>
              </>
            )}
          </CardContent>
        </Card>
      </CardContainer>
    </SectionWrapper>
  );
}
