"use client";

import {FaGithub, FaPenFancy, FaEnvelope, FaChevronUp} from "react-icons/fa";
import {
  FooterWrapper,
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterText,
  IconWrapper,
  IconButton,
  ScrollToTopButton,
} from "./styled";
import Link from "next/link";

export default function Footer() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('j_eun_2@naver.com');
    alert('이메일 주소가 복사되었습니다');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>
            🙇‍♀️ 이정은
            <IconWrapper>
              <Link href="https://github.com/Jung2un" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </Link>
              <Link href="https://velog.io/@jeun_ios/posts" target="_blank" rel="noopener noreferrer">
                <FaPenFancy size={20} />
              </Link>
              <IconButton onClick={handleCopyEmail} aria-label="이메일 복사">
                <FaEnvelope size={20} />
              </IconButton>
            </IconWrapper>
          </FooterTitle>
          <FooterText>
            다양한 UI/UX를 한 곳에 담은 프로젝트입니다.
          </FooterText>
        </FooterSection>
        <FooterSection>
          <ScrollToTopButton onClick={scrollToTop}>
            <FaChevronUp size={20} />
          </ScrollToTopButton>
        </FooterSection>
      </FooterContainer>
    </FooterWrapper>
  );
}
