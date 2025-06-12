import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  background: #000;
`;

export const MarqueeSection = styled.section`
  width: 100%;
  padding: 32px 0;
`;

export const MarqueeContainer = styled.div`
  position: relative;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const TrackReverse = styled(Track)`
  animation: marqueeReverse 20s linear infinite;
  
  @keyframes marqueeReverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
`;

export const Brand = styled.span`
  color: #fff;
  opacity: 0.8;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
`;