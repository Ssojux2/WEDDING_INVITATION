import React, { useEffect, useRef } from "react";
import { Divider } from "antd";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  padding-top: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1.125rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const FlowerImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Content = styled.div`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.span`
  font-size: 0.95rem;
  color: var(--title-color);
  font-weight: 600;
  opacity: 0.85;
  margin: 0.5rem 0;
  display: inline-block;
`;

const TransportInfo = styled.div`
  margin: 0.5rem 0 1.5rem 0;
`;

const Location = () => {
  const mapContainerRef = useRef(null);

  // Improved Kakao Map integration
  useEffect(() => {
    // Create a cleaner script loading approach
    const loadKakaoMap = () => {
      // Check if script already exists to prevent duplicates
      if (document.getElementById('kakao-map-script')) {
        initializeMap();
        return;
      }

      // Create and load the script
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    // Initialize the map after script loads
    const initializeMap = () => {
      if (!mapContainerRef.current) return;

      const container = mapContainerRef.current;

      // Load the embedded map with improved error handling
      try {
        // Use a modern approach to load the map
        // Note: In a real implementation, you should use the official Kakao Maps API
        const mapHtml = `
          <div id="daumRoughmapContainer1740234367142" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%;height:360px;border-radius:8px;overflow:hidden;"></div>
          <script charset="UTF-8">
            new daum.roughmap.Lander({
              "timestamp": "1740234367142",
              "key": "2n5b6",
              "mapWidth": "640",
              "mapHeight": "360"
            }).render();
          </script>
        `;

        container.innerHTML = mapHtml;

        // Execute scripts in the HTML string
        const scripts = container.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
          const script = document.createElement('script');
          script.charset = scripts[i].charset;
          script.textContent = scripts[i].textContent;
          document.head.appendChild(script);
        }

      } catch (error) {
        console.error('Error loading Kakao map:', error);
        container.innerHTML = '<p style="text-align:center;padding:30px;">지도를 불러올 수 없습니다. 주소를 확인해 주세요.</p>';
      }
    };

    // Load the map
    loadKakaoMap();

    // Cleanup function
    return () => {
      const script = document.getElementById('kakao-map-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title data-aos="fade-up">오시는 길</Title>
      </Divider>

      <FlowerImage data-aos="fade-up">
        <StaticImage
          src="../assets/flower2.png"
          alt="Flower"
          width={30}
          placeholder="blurred"
        />
      </FlowerImage>

      <Map
        ref={mapContainerRef}
        data-aos="fade-up"
      />

      <Content data-aos="fade-up">
        <strong>서울 동대문구 왕산로 200</strong>
        <br />
        SKY-L65 랜드마크타워 6F
        <br />
        L65호텔웨딩컨벤션 Garden Hall
        <br />
        <br />

        <TransportInfo>
          <SubTitle>버스 이용시</SubTitle>
          <br />
          청량리역환승센터 하차
        </TransportInfo>

        <TransportInfo>
          <SubTitle>지하철 이용시</SubTitle>
          <br />
          경의중앙, 수인분당, 경춘선 청량리역 1번출구 바로 앞
          <br />
          1호선 청량리역 5번출구 바로 앞
        </TransportInfo>
      </Content>
    </Wrapper>
  );
};

export default Location;