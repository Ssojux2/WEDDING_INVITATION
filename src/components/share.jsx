import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  font-weight: 500;
  height: 48px;
  border-radius: 8px;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background-color: rgba(217, 125, 131, 0.2);
  border-color: rgba(217, 125, 131, 0.2) !important;
  color: var(--title-color) !important;
  font-weight: 500 !important;
  height: 48px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(217 125 131 / 48%) !important;
    border-color: rgb(217 125 131 / 48%) !important;
    color: var(--title-color) !important;
  }
`;

const Share = () => {
  useEffect(() => {
    // KakaoTalk SDK 스크립트 로드
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const createKakaoButton = () => {
    // KakaoTalk SDK 초기화
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(KAKAOTALK_API_TOKEN);
      }

      kakao.Link.createDefaultButton({
        objectType: 'feed',
        container: '#sendKakao',
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 열기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });

      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    } else {
      message.error("카카오톡 SDK를 불러오는데 실패했습니다.");
    }
  };

  const handleLinkCopy = () => {
    message.success("청첩장 링크가 복사되었습니다.");
  };

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>청첩장 공유하기</Title>
      </Divider>

      <ButtonContainer>
        <KakaoTalkShareButton
          data-aos="fade-up"
          icon={<MessageFilled />}
          id="sendKakao"
          size="large"
          onClick={createKakaoButton}
        >
          카카오톡으로 공유하기
        </KakaoTalkShareButton>

        <CopyToClipboard text={WEDDING_INVITATION_URL}>
          <LinkShareButton
            data-aos="fade-up"
            icon={<LinkOutlined />}
            size="large"
            onClick={handleLinkCopy}
          >
            링크로 공유하기
          </LinkShareButton>
        </CopyToClipboard>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Share;