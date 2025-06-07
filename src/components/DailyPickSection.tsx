"use client";

import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useDailyPickStore } from "@/store/useDailyPickStore";
import {
  ContentBox,
  TextWrap,
  Text,
  ProgressBarContainer,
  ProgressBar,
  NextButton,
} from "./DailyPickSection.styled";

const contents = [
  `행복은 매달 찾아온다. 그러나 그것을 맞이할 준비가 되어있지 않으면 거의 다 놓치고 만다. 이번 달에는 이 행운을 놓치지 마라.`,
  `실패는 언제나 찾아오는 친구이며 성공은 어쩌다 찾아오는 손님이다.`,
  `어떠한 위대한 일도 하루 아침에 이루어지지 않는다.`,
  `다른 누군가가 이룬 꿈은 나도 얼마든지 이룰 수 있다.`,
  `과거는 이미 지나갔고, 미래는 아직 오지 않았어요. 현재는 어떤가요? 지금 이 순간에 늘 행복해야 합니다.`
];

interface DailyPickSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function DailyPickSection({ sectionRef }: DailyPickSectionProps) {

  const {
    contentIndex,
    animationKey,
    isTyping,
    typingProgress,
    nextContent,
    setTypingProgress,
    finishTyping,
    startTyping
  } = useDailyPickStore();

  const [displayedText, setDisplayedText] = useState("");
  const [hasTriggered, setHasTriggered] = useState(false); // 한 번만 트리거되도록

  const handleContentClick = () => {
    nextContent(contents.length);
    setHasTriggered(false); // 다음 콘텐츠로 넘어갈 때 트리거 리셋
  };

  // 스크롤 감지  (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          startTyping(); // 타이핑 시작
        }
      },
      {
        threshold: 0.5, // 50% 보일 때 트리거
        rootMargin: '0px 0px -100px 0px' // 하단 여백을 두어 더 자연스럽게
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered, startTyping, sectionRef]);

  // 타이핑 애니메이션 처리
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let currentCharIndex = 0;

    const currentContent = contents[contentIndex];
    const textLength = currentContent.length;
    const typingSpeed = 100; // 밀리초당 글자 하나

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // 타이핑 속도에 따라 현재 표시할 글자 인덱스 계산
      const targetCharIndex = Math.floor(elapsed / typingSpeed);

      if (targetCharIndex > currentCharIndex && currentCharIndex < textLength) {
        currentCharIndex = targetCharIndex;
        setDisplayedText(currentContent.slice(0, currentCharIndex));

        // 진행률 업데이트
        const progress = (currentCharIndex / textLength) * 100;
        setTypingProgress(progress);
      }

      if (currentCharIndex < textLength) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayedText(currentContent);
        setTypingProgress(100);
        finishTyping();
        cancelAnimationFrame(animationFrame);
      }
    };

    if (isTyping && hasTriggered) {
      setDisplayedText("");
      currentCharIndex = 0;
      animationFrame = requestAnimationFrame(animate);
    } else if (!isTyping) {
      // 타이핑이 끝난 상태면 전체 텍스트 표시
      setDisplayedText(currentContent);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animationKey, isTyping, contentIndex, setTypingProgress, finishTyping, hasTriggered]);

  return (
    <>
      <ContentBox>
        <TextWrap>
          <Text $isTyping={isTyping}>
            {displayedText}
            {isTyping && <span className="cursor">|</span>}
          </Text>
        </TextWrap>

        {isTyping ? (
          <ProgressBarContainer>
            <ProgressBar style={{ width: `${typingProgress}%` }} />
          </ProgressBarContainer>
        ) : (
          <NextButton onClick={handleContentClick}>
            <FiChevronRight />
          </NextButton>
        )}
      </ContentBox>
    </>
  );
}