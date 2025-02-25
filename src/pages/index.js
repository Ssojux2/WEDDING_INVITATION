import React, { useEffect } from "react";
import { Layout } from "antd";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import "react-image-gallery/styles/css/image-gallery.css";

// Import components
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
// Uncomment if you want to use the Quote component
// import Quote from "../components/quote";

// Import styles
import "../styles/index.css";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

const { Footer } = Layout;

// Use StaticImage for background if needed
const Wrapper = styled.div`
  background: #efebe9;
  width: 100%;
  position: relative;
`;

// SEO Component for Gatsby v5
export const Head = () => (
  <>
    <title>소준섭 & 박범지의 결혼식에 초대합니다</title>
    <meta name="description" content="2025년 5월 11일, 일요일 오후 2시 - L65호텔웨딩컨벤션, 6층 가든홀" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="소준섭 & 박범지의 결혼식에 초대합니다" />
    <meta property="og:description" content="2025년 5월 11일, 일요일 오후 2시 - L65호텔웨딩컨벤션, 6층 가든홀" />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

const IndexPage = () => {
  // Load Kakao SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js";
    script.integrity = "sha384-mXVrIX2T/Kszp6Z1AAymNe92bPFqF/1X1lzHzz1TQBVfIPUahdOs7dVPLaGC9jjG";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // Whether animation should happen only once
      mirror: false,
    });
  }, []);

  // Audio player with user interaction to satisfy autoplay policies
  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audio.loop = true;

    // Add a button for user interaction to start audio
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
      // Change button text after playing
      playButton.innerText = '🎵 음악 재생 중';

      // Add pause/play toggle
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