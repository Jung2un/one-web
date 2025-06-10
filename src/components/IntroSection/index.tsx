"use client";

import React from "react";
import {
  SectionWrapper,
  SectionTitle,
  CardGrid,
  Card,
  CardTitle,
  CardDescription,
  CardContainer,
  CardImage,
  CardContent,
} from "./styled";
import Image from "next/image";

export default function IntroSection() {

  const cards = [
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
      <CardContainer>
        <CardGrid>
          {cards.map((info, index) => (
            <Card key={index}>
              <CardImage>
                <Image
                  src={info.image}
                  alt={info.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </CardImage>
              <CardContent>
                <CardTitle>{info.title}</CardTitle>
                <CardDescription>{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </CardContainer>
    </SectionWrapper>
  );
}
