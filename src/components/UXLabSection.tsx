"use client";

import { useUXLabStore } from "@/store/useUXLabStore";
import {
  SectionWrapper,
  BackLink,
  Title,
  SubTitle,
  ButtonWrapper,
  ModeText,
  UXButton,
  UsageSection,
  UsageCard,
  UsageNumber,
  UsageTitle,
  UsageDescription,
} from "./UXLabSection.styled";

export default function UXLabSection() {
  const { mode, setMode } = useUXLabStore();

  const handleModeClick = () => {
    // 샘플: 메모 -> 날씨 -> 뉴스
    const modes = ["메모", "날씨", "뉴스"];
    const nextIndex = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[nextIndex]);
  };

  return (
    <SectionWrapper>
      <BackLink href="/">←</BackLink>
      <Title>UX 실험실</Title>
      <SubTitle>
        하나의 버튼으로 메모, 날씨, 뉴스 기능을 전환하며
        <br />
        다양한 사용자 인터랙션을 실험해보세요.
      </SubTitle>
      <ButtonWrapper>
        <ModeText>현재 모드: {mode}</ModeText>
        <UXButton onClick={handleModeClick}>
          {/* 아이콘이나 모드 전환 기능 추가 예정 */}
          ✏️
        </UXButton>
      </ButtonWrapper>
      <UsageSection>
        <UsageCard>
          <UsageNumber>1</UsageNumber>
          <UsageTitle>클릭</UsageTitle>
          <UsageDescription>버튼 한 번 클릭</UsageDescription>
        </UsageCard>
        <UsageCard>
          <UsageNumber>2</UsageNumber>
          <UsageTitle>더블클릭</UsageTitle>
          <UsageDescription>버튼 빠르게 두 번 클릭</UsageDescription>
        </UsageCard>
        <UsageCard>
          <UsageNumber>3</UsageNumber>
          <UsageTitle>길게 누르기</UsageTitle>
          <UsageDescription>버튼 길게 누르기</UsageDescription>
        </UsageCard>
      </UsageSection>
    </SectionWrapper>
  );
}
