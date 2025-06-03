"use client";

import { useDailyPickStore } from "@/store/useDailyPickStore";
import {
  SectionWrapper,
  SectionTitle,
  ContentBox,
  Text,
} from "./DailyPickSection.styled";

const contents = [
  "오늘의 한마디: 임시 텍스트1",
  "오늘의 한마디: 임시 텍스트2",
  "오늘의 한마디: 임시 텍스트3",
];

export default function DailyPickSection() {
  const { contentIndex, nextContent } = useDailyPickStore();

  const handleContentClick = () => {
    nextContent(contents.length);
  };

  return (
    <SectionWrapper>
      <SectionTitle>Daily Pick</SectionTitle>
      <ContentBox onClick={handleContentClick}>
        <Text>{contents[contentIndex]}</Text>
      </ContentBox>
    </SectionWrapper>
  );
}
