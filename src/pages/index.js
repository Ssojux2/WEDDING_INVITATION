import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
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

// Gatsby v4 SEO 설정
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

  // 사용자 상호작용을 통한 오디오 재생 기능
  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audio.loop = true;

    // 사용자 상호작용을 위한 버튼 추가
    const playButton = document.createElement('button');
    playButton.innerText = '💝 배경음악 재생';
    playButton.style.position = 'fixed';
    playButton.style.bottom = '20px';
    playButton.style.right = '20px';
    playButton.style.zIndex = '1000';
    playButton.style.padding = '8px 16px';
    playButton.style.borderRadius = '20px';
    playButton.style.backgroundColor = 'rgba(217, 125, 131, 0.8)';
    playButton.style.color = 'white';
    playButton.style.border = 'none';
    playButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    playButton.onclick = () => {
      audio.play().catch(e => console.error("Audio play failed:", e));
      // 재생 후 버튼 텍스트 변경
      playButton.innerText = '🎵 음악 재생 중';

      // 일시정지/재생 토글 추가
      playButton.onclick = () => {
        if (audio.paused) {
          audio.play();
          playButton.innerText = '🎵 음악 재생 중';
        } else {
          audio.pause();
          playButton.innerText = '🔇 음악 일시정지';
        }
      };
    };

    document.body.appendChild(playButton);

    return () => {
      audio.pause();
      if (document.body.contains(playButton)) {
        document.body.removeChild(playButton);
      }
    };
  }, []);

  return (
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
        Copyright © 2025
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;