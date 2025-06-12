"use client";

import React from "react";
import { MainWrapper, MarqueeSection, MarqueeContainer, Viewport, Track, TrackReverse, Group, Brand } from "./styled";

export default function AnimationSection() {
  const topArr = ["디테일을 담은 다양함.", "몰입을 이끄는 애니메이션.", "완성도 높은 UX로 이어집니다."];
  const bottomArr = ["UX의 본질을 고민합니다.", "당신의 경험에 집중합니다.", "사용자를 위한 인터랙션."];

  const duplicatedTopArr = [...topArr, ...topArr];
  const duplicatedBottomArr = [...bottomArr, ...bottomArr];

  return (
    <MainWrapper>
      <MarqueeSection>
        <MarqueeContainer>
          <Viewport>
            <Track>
              <Group>
                {duplicatedTopArr.map((text, index) => (
                  <Brand key={`top-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedTopArr.map((text, index) => (
                  <Brand key={`top-clone-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedTopArr.map((text, index) => (
                  <Brand key={`top-clone2-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedTopArr.map((text, index) => (
                  <Brand key={`top-clone3-${index}`}>{text}</Brand>
                ))}
              </Group>
            </Track>
          </Viewport>
        </MarqueeContainer>

        <MarqueeContainer>
          <Viewport>
            <TrackReverse>
              <Group>
                {duplicatedBottomArr.map((text, index) => (
                  <Brand key={`bottom-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedBottomArr.map((text, index) => (
                  <Brand key={`bottom-clone-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedBottomArr.map((text, index) => (
                  <Brand key={`bottom-clone2-${index}`}>{text}</Brand>
                ))}
              </Group>
              <Group aria-hidden>
                {duplicatedBottomArr.map((text, index) => (
                  <Brand key={`bottom-clone3-${index}`}>{text}</Brand>
                ))}
              </Group>
            </TrackReverse>
          </Viewport>
        </MarqueeContainer>
      </MarqueeSection>
    </MainWrapper>
  );
}