"use client";

import Image from "next/image";
import { useEffect } from "react";
import { updateTitle } from "@/actions/titleActions";
import {
  MainSectionWrapper,
  BackgroundImage,
  Title,
  Subtitle,
  ScrollIcon
} from "@/components/MainSection/styled";

export default function MainSectionClient({ mainTitle }: { mainTitle: string }) {
  useEffect(() => {
    updateTitle().catch(console.error);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <MainSectionWrapper>
      <BackgroundImage>
        <Image
          src="/images/main-img.jpg"
          alt="Background"
          fill
          priority
          quality={100}
        />
      </BackgroundImage>
      <Title>{mainTitle}</Title>
      <Subtitle>
        하루의 시작을 여는 오늘의 운세부터<br />
        다양한 콘텐츠와 타이핑 애니메이션까지
      </Subtitle>
      <ScrollIcon onClick={handleScroll}>↓</ScrollIcon>
    </MainSectionWrapper>
  );
}
