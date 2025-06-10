"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Product {
  brand: string;
  id: number;
}

interface ProductRes {
  products: Product[];
}

interface BlurOverlayProps {
  position: 'left' | 'right';
}

export default function AnimationSection() {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data: ProductRes = await res.json();
        const result = data.products.map((product: Product) => product.brand);
        setBrands(result);
      } catch {
        setBrands([]);
      }
    };

    fetchBrands();
  }, []);

  const duplicate = [...brands, ...brands, ...brands];

  return (
    <MainWrapper>
      <HorizontalSection>
        <TickerContainer>
          <BlurOverlay position="left" />
          <TickerContent
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {duplicate.map((brand, index) => (
              <Brand key={`top-${index}`}>
                {brand}
              </Brand>
            ))}
          </TickerContent>
          <BlurOverlay position="right" />
        </TickerContainer>

        <TickerContainer>
          <BlurOverlay position="left" />
          <TickerContentReverse
            animate={{
              x: ["-33.333%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {duplicate.map((brand, index) => (
              <BrandReverse key={`bottom-${index}`}>
                {brand}
              </BrandReverse>
            ))}
          </TickerContentReverse>
          <BlurOverlay position="right" />
        </TickerContainer>
      </HorizontalSection>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
    width: 100%;
    background: #000;
`;

const HorizontalSection = styled.section`
    width: 100%;
    padding: 32px 0;
`;

const TickerContainer = styled.div`
    overflow: hidden;
    position: relative;
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TickerContent = styled(motion.div)`
    display: flex;
    white-space: nowrap;
`;

const TickerContentReverse = styled(motion.div)`
    display: flex;
    white-space: nowrap;
`;

const Brand = styled.span`
    color: white;
    flex-shrink: 0;
    margin: 0 32px;
    font-size: 24px;
    font-weight: bold;
`;

const BrandReverse = styled.span`
    color: white;
    opacity: 0.7;
    flex-shrink: 0;
    margin: 0 32px;
    font-size: 24px;
    font-weight: bold;
`;

const BlurOverlay = styled.div<BlurOverlayProps>`
    top: 0;
    bottom: 0;
    z-index: 10;
    width: 100px;
    position: absolute;
    pointer-events: none;

    ${props => props.position === 'left' && `
    left: 0;
    background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%);
  `}

    ${props => props.position === 'right' && `
    right: 0;
    background: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%);
  `}
`;