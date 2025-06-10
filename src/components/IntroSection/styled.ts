import styled from "styled-components";

export const SectionWrapper = styled.section`
    display: flex;
    //min-height: 100vh;
    padding: 4rem 2rem;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
        //padding: 2rem 1rem;
    }
`;

export const SectionTitle = styled.h2`
    color: #111;
    width: 100%;
    text-align: left;
    font-weight: 700;
    max-width: 1100px;
    font-size: 2.5rem;
    letter-spacing: -.1rem;

    @media (max-width: 767px) {
        font-size: 2rem;
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    padding: 1.5rem;
    overflow: hidden;
    max-width: 1100px;
    position: relative;
    margin-bottom: 5rem;
`;

export const CardGrid = styled.div`
    gap: 3rem;
    width: 100%;
    display: grid;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const Card = styled.div`
    z-index: 1;
    padding: 2rem;
    height: 450px;
    cursor: pointer;
    text-align: left;
    position: relative;
    border-radius: 1rem;
    background-color: #fff;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);

    &::before {
        content: '';
        opacity: 0;
        inset: -2px;
        padding: 2px;
        position: absolute;
        border-radius: inherit;
        background: 
            radial-gradient(circle, #dd7bbbff 10%, #dd7bbb00 20%),
            radial-gradient(circle at 40% 40%, #d79f1eff 5%, #d79f1e00 15%),
            radial-gradient(circle at 60% 60%, #5a922cff 10%, #5a922c00 20%),
            radial-gradient(circle at 40% 60%, #4c7894ff 10%, #4c789400 20%),
            repeating-conic-gradient(
                from 236.84deg at 50% 50%,
                #dd7bbb 0%,
                #d79f1e calc(25% / 5),
                #5a922c calc(50% / 5),
                #4c7894 calc(75% / 5),
                #dd7bbb calc(100% / 5)
            );
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        transition: opacity 0.3s ease;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export const CardTitle = styled.h3`
    margin: 0;
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
`;

export const CardDescription = styled.p`
    color: #fff;
    line-height: 1.5;
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 0.8rem;
    white-space: pre-line;
`;

export const CardImage = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    border-radius: 0.9rem;
`;

export const CardContent = styled.div`
    z-index: 1;
    text-align: left;
    position: relative;
    border-radius: 1rem;
`;
