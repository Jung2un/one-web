import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapper = styled.section`
    width: 100%;
    display: flex;
    padding: 2rem 0;
    position: relative;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f7;
`;

export const TabButtonWrapper = styled.div`
    top: 8rem;
    display: flex;
    overflow: hidden;
    position: absolute;
    border-radius: 3rem;
    background-color: #fff;
    border: 1px solid #ddd;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    position: relative;
    border-radius: 3rem;
    padding: 0.5rem 1.25rem;
    letter-spacing: -0.04rem;
    transition: all 0.2s ease;
    background-color: transparent;
    cursor: ${({ $isActive }) => ($isActive ? "inherit" : "pointer")};
`;

export const TabText = styled.span<{ $isActive: boolean }>`
    z-index: 2;
    position: relative;
    transition: color 0.2s ease;
    color: ${({ $isActive }) => ($isActive ? "#fff" : "#888")};
`;

export const Indicator = styled(motion.div)`
    inset: 0;
    z-index: 1;
    position: absolute;
    border-radius: 3rem;
    background-color: #555;
`;

export const ContentWrapper = styled.section<{ $currentTab: string }>`
    flex: 1;
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;