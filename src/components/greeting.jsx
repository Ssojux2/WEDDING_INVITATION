import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
  width: 70%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">초대합니다</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Content data-aos="fade-up">
        인연이란
        <br />
        <br />
        예측하지 못한 곳에서는
        <br />
        <br />
        선물처럼 찾아오는 것 같습니다.
        <br />
        <br />
        저희 또한 그랬고 그렇게 만나게 되었습니다.
        <br />
        <br />
        우리는 언제부턴가
        <br />
        <br />
        각자의 모험에 서로가 제일 잘 맞는 사람이 되었고
        <br />
        <br />
        이제는 함께 헤쳐나가려 합니다.
        <br />
        <br />
        저희의 특별한 여정에 당신의 발자취를 더해주세요.
      </Content>
      <GroomBride data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 준섭
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 범지
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
