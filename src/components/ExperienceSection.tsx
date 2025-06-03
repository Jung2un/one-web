"use client";

import React from "react";
import {
  SectionWrapper,
  SectionTitle,
  FeatureGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
  CardContainer,
  FeatureImage,
  FeatureContent,
} from "./ExperienceSection.styled";
import { useMousehoverStore } from "@/store/useMousehoverStore";
import Image from "next/image";

export default function ExperienceSection() {
  const { coords, setCoords } = useMousehoverStore();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  const features = [
    {
      title: "타로카드",
      description: "오늘의 운세를\n 3D 애니메이션으로.",
      image: "/images/tarot.jpg",
    },
    {
      title: "UX 실험실",
      description: "3개의 기능을 버튼 하나로.",
      image: "/images/ux.jpg",
    },
    {
      title: "Daily Pick",
      description: "하루에 하나의 글을\n 타이핑 애니메이션으로.",
      image: "/images/daily.jpg",
    },
  ];

  return (
    <SectionWrapper>
      <SectionTitle>다채로운 경험</SectionTitle>
      <CardContainer onMouseMove={handleMouseMove}>
        <div
          className="glow"
          style={{
            background: `radial-gradient(circle at ${coords.x}% ${coords.y}%, rgba(155, 108, 212, 0.5), transparent 15%)`,
          }}
        />
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureImage>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </FeatureImage>
              <FeatureContent>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureContent>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </CardContainer>


    </SectionWrapper>
  );
}
