"use client";

import React, { useRef } from "react";
import { useTabStore } from "@/store/useTabStore";
import UXLabSection from "@/components/UXLabSection";
import DailyPickSection from "@/components/DailyPickSection";
import TarotCardSection from "@/components/TarotCardSection";
import {
  ContentWrapper,
  Indicator,
  SectionWrapper,
  TabButton,
  TabButtonWrapper,
  TabText
} from "@/components/TabSection/styled";

export default function TabSection() {
  const { currentTab, setCurrentTab } = useTabStore();
  const sectionRef = useRef<HTMLElement>(null);

  const tabs = [
    { id: "dailyPick", label: "Daily Pick" },
    { id: "tarotCard", label: "타로 카드" },
    { id: "uxLab", label: "UX 실험실" },
  ] as const;

  return (
    <SectionWrapper>
      <TabButtonWrapper>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            $isActive={currentTab === tab.id}
            onClick={() => setCurrentTab(tab.id)}
          >
            {currentTab === tab.id && (
              <Indicator
                layoutId="tab-indicator"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3
                }}
              />
            )}
            <TabText $isActive={currentTab === tab.id}>
              {tab.label}
            </TabText>
          </TabButton>
        ))}
      </TabButtonWrapper>

      <ContentWrapper $currentTab={currentTab} ref={sectionRef}>
        {currentTab === "dailyPick" && <DailyPickSection sectionRef={sectionRef} />}
        {currentTab === "tarotCard" && <TarotCardSection />}
        {currentTab === "uxLab" && <UXLabSection />}
      </ContentWrapper>
    </SectionWrapper>
  );
}