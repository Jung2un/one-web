"use client";

import React, {useRef} from 'react';
import styled from "styled-components";
import {useTabStore} from '@/store/useTabStore';
import DailyPickSection from '@/components/DailyPickSection';
import FutureCardSection from '@/components/FutureCardSection';
import UXLabSection from "@/components/UXLabSection";

export default function TabSection() {
  const {currentTab, setCurrentTab} = useTabStore();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionWrapper>
      <TabButtonWrapper>
        <TabButton
          $isActive={currentTab === "dailyPick"}
          onClick={() => setCurrentTab("dailyPick")}
        >
          Daily Pick
        </TabButton>
        <TabButton
          $isActive={currentTab === "futureCard"}
          onClick={() => setCurrentTab("futureCard")}
        >
          타로 카드
        </TabButton>
        <TabButton
          $isActive={currentTab === "uxLab"}
          onClick={() => setCurrentTab("uxLab")}
        >
          UX 실험실
        </TabButton>
      </TabButtonWrapper>

      <ContentWrapper $currentTab={currentTab} ref={sectionRef}>
        {currentTab === 'dailyPick' && <DailyPickSection sectionRef={sectionRef}/>}
        {currentTab === 'futureCard' && <FutureCardSection/>}
        {currentTab === 'uxLab' && <UXLabSection/>}
      </ContentWrapper>

    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
    width: 100%;
    display: flex;
    padding: 2rem 0;
    position: relative;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f7;
`;

const TabButtonWrapper = styled.div`
    top: 8rem;
    gap: 0.25rem;
    display: flex;
    padding: 0.25rem;
    position: absolute;
    border-radius: 3rem;
    background-color: #fff;
    border: 1px solid #ddd;
`;

const TabButton = styled.button<{ $isActive: boolean; $activeColor?: string }>`
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 3rem;
    padding: 0.5rem 1.25rem;
    letter-spacing: -0.04rem;
    color: ${({ $isActive }) => ($isActive ? "#fff" : "#888")};
    cursor: ${({ $isActive }) => ($isActive ? "inherit" : "pointer")};
    background-color: ${({ $isActive, $activeColor }) =>
            $isActive ? ($activeColor ? $activeColor : "#555") : "transparent"};
`;

const ContentWrapper = styled.section<{ $currentTab: string }>`
    flex: 1;
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    // padding: ${({$currentTab}) => ($currentTab === 'dailyPick' ? '4rem 0' : '4rem 2rem')};
`;
