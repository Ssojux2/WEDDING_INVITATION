import React from "react";
import styled from "styled-components";
// StaticImage 대신 일반 이미지 가져오기
import FlowerImage from "../assets/flower1.png";

const Wrapper = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter", serif;
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.9;
`;

const FlowerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FlowerImg = styled.img`
  width: 30px;
  height: auto;
`;

const Quote = () => {
  return (
    <Wrapper>
      <FlowerContainer data-aos="fade-up">
        <FlowerImg src={FlowerImage} alt="꽃 이미지" />
      </FlowerContainer>

      <ContentContainer data-aos="fade-up">
        <Content>
          장담하건대. 세상이 다 겨울이어도
          <br />
          우리 사랑은 늘봄처럼 따뜻하고
          <br />
          간혹, 여름처럼 뜨거울 겁니다
          <br />
          <br />
          - 이수동, (사랑가) -
          <br />
          <br />
        </Content>
      </ContentContainer>
    </Wrapper>
  );
};

export default Quote;