import React, { useEffect } from "react";
import { Layout, ConfigProvider } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

// 컴포넌트 가져오기
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
// Quote 컴포넌트를 사용하려면 아래 주석을 해제하세요
// import Quote from "../components/quote";

// 스타일 가져오기
import "../styles/index.css";

// 애니메이션을 위한 AOS 라이브러리 가져오기
import AOS from "aos";
import "aos/dist/aos.css";

const { Footer } = Layout;

// 배경을 위한 스타일 컴포넌트
const Wrapper = styled.div`
  background: #efebe9;
  width: 100%;
  position: relative;
`;

// 테마 설정
const antTheme = {
  token: {
    colorPrimary: '#d97d83',
    borderRadius: 8,
  },
};

// Gatsby v5 SEO 설정
const IndexPage = () => {
  // 카카오 SDK 로드
  useEffect(() => {
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

  // AOS 애니메이션 라이브러리 초기화
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // 애니메이션을 한 번만 실행할지 여부
      mirror: false,
    });
  }, []);

  return (
    <ConfigProvider theme={antTheme}>
      <Wrapper>
        <Title />
        <Greeting />
        <Gallery />
        <Location />
        {/* <Quote /> */}
        <CongratulatoryMoney />
        <Share />
        <Footer
          style={{
            background: "#D7CCC8",
            opacity: 0.8,
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Copyright © 2022 Shin Jooyoung Edit 2025 So Junseop
        </Footer>
      </Wrapper>
    </ConfigProvider>
  );
};

// Gatsby 페이지 컴포넌트에는 Head 컴포넌트를 추가할 수 있습니다 (Gatsby v5 기능)
export const Head = () => (
  <>
    <title>소준섭 & 박범지의 결혼식에 초대합니다</title>
    <meta name="description" content="소준섭 & 박범지의 결혼식에 초대합니다" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default IndexPage;
