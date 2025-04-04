import React, { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
// 일반 이미지 가져오기
import FlowerImage from "../assets/flower3.png";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.5rem; /* 1 * 1.5 = 1.5rem */
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1.3rem; /* 0.875 * 1.5 = 1.3rem */
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 2.5rem;
`;

const SubContent = styled.p`
  font-size: 1.3rem; /* 0.875 * 1.5 = 1.3rem */
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 1.3rem; /* 0.875 * 1.5 = 1.3rem */
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 0.5rem;
  text-align: center;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: 1.5rem; /* 1rem * 1.5 = 1.5rem */
`;

const ContactButton = styled.div`
  width: 16rem; /* 10.75rem * 1.5 = 16rem (약간 조정) */
  border: 1px solid #efddde;
  padding: 3rem 0; /* 2.188rem * 1.5 = 3.282rem (약간 조정) */
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(239, 221, 222, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FlowerContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const FlowerImg = styled.img`
  width: 45px; /* 30px * 1.5 = 45px */
  height: auto;
`;

// Modal 스타일 재정의
const StyledModal = styled(Modal)`
  .ant-modal-content {
    font-size: 1.3rem; /* 기존 폰트 크기의 150% */
  }
  
  .ant-modal-title {
    font-size: 1.5rem; /* 기존 폰트 크기의 150% */
  }
  
  .ant-modal-body {
    font-size: 1.3rem;
  }
  
  .ant-btn {
    font-size: 1.3rem;
    height: auto;
    padding: 0.5rem 1rem;
  }
`;

const AccountButtonStyle = {
  padding: 0,
  margin: 0,
  fontSize: '1.3rem' /* 글씨 크기 150% 증가 */
};

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  // Ant Design v5 message API 사용
  const showCopyMessage = () => {
    message.success("계좌번호가 복사되었습니다.");
  };

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>축하의 마음을 전하세요</Title>
      </Divider>

      <FlowerContainer data-aos="fade-up">
        <FlowerImg src={FlowerImage} alt="꽃 이미지" />
      </FlowerContainer>

      <Content data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </Content>

      <ButtonWrap>
        <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 128, marginBottom: 24 }} /* 64 * 1.5 = 96 */
            twoToneColor="#829fe0"
          />
          <br />
          <SubContent>신랑측 <br /> 계좌번호 확인</SubContent>
        </ContactButton>
        <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 128, marginBottom: 24 }} /* 64 * 1.5 = 96 */
            twoToneColor="#fe7daf"
          />
          <br />
          <SubContent>신부측 <br /> 계좌번호 확인</SubContent>
        </ContactButton>
      </ButtonWrap>

      {/* Ant Design v5에 맞는 Modal 구현 - 크기 조정 */}
      <StyledModal
        title={<b>신랑측 계좌번호</b>}
        open={groomVisible}  // visible -> open으로 변경됨
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <Description key="description">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </StyledModal>

      <StyledModal
        title={<b>신부측 계좌번호</b>}
        open={brideVisible}  // visible -> open으로 변경됨
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <Description key="description">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>,
        ]}
      >
        <div>
          <b>부 : {BRIDE_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {BRIDE_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모 : {BRIDE_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {BRIDE_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신부 {BRIDE_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={AccountButtonStyle}
              onClick={showCopyMessage}
            >
              {BRIDE_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </StyledModal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;