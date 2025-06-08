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
import { useMousehoverStore } from "@/store/useMousehoverStore";

export default function IntroSection() {
  const { coords, setCoords } = useMousehoverStore();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

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
      <CardContainer onMouseMove={handleMouseMove}>
        <div
          className="glow"
          style={{
            background: `
              radial-gradient(circle at ${coords.x}% ${coords.y}%,
                rgba(255, 100, 200, 0.1) 2%,
                transparent 5%),
              radial-gradient(circle at ${coords.x}% ${coords.y}%,
                rgba(255, 255, 100, 0.2) 6%,
                transparent 12%),
              radial-gradient(circle at ${coords.x}% ${coords.y}%,
                rgba(150, 100, 255, 0.2) 8%,
                transparent 15%)
            `
          }}
        />
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
