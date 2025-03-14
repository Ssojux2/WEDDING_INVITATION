import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
// StaticImage 대신 일반 이미지 가져오기
import FlowerImage from "../assets/flower1.png";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
`;

const Title = styled.p`
  font-size: 1.7rem; /* 1.125 * 1.5 = 1.7rem */
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1.3rem; /* 0.875 * 1.5 = 1.3rem */
  line-height: 1.75;
  color: #000000;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 1.5rem; /* 1 * 1.5 = 1.5rem */
  line-height: 1.75;
  color: #000000;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

const NameHighlight = styled.span`
  color: #000000;
  font-weight: 600;
  font-size: 1.5rem;
`;

const SmallText = styled.span`
  font-size: 1.5rem;
  color: #A7A9AC;
`;

const FlowerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FlowerImg = styled.img`
  width: 45px; /* 30 * 1.5 = 45px */
  height: auto;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>

      <FlowerContainer data-aos="fade-up">
        <FlowerImg src={FlowerImage} alt="꽃 이미지" />
      </FlowerContainer>

      <Content data-aos="fade-up">
        인연이란
        <br />
        예측하지 못한 곳에서는
        <br />
        선물처럼 찾아오는 것 같습니다.
        <br />
        저희 또한 그랬고
        <br />
        그렇게 만나게 되었습니다.
        <br />
        <br />
        우리는 언제부턴가
        <br />
        각자의 모험에
        <br />
        서로가 제일 잘 맞는 사람이 되었고
        <br />
        이제는 함께 헤쳐나가려 합니다.
        <br />
        저희의 특별한 여정에
        <br />
        당신의 발자취를 더해주세요.
        <br />
        <br />
      </Content>

      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}<SmallText>의 장남</SmallText> <NameHighlight>준섭</NameHighlight>
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}<SmallText>의 장녀</SmallText> <NameHighlight>범지</NameHighlight>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;