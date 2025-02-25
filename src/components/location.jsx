import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
// StaticImage 대신 일반 이미지 가져오기
import FlowerImage from "../assets/flower2.png";

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

const FlowerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const FlowerImg = styled.img`
  width: 30px;
  height: auto;
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
  // 카카오 맵 불러오기
  useEffect(() => {
    // 기존 방식을 유지하지만 일부 개선
    const InstallScript = () => {
      (function () {
        let c = window.location.protocol === "https:" ? "https:" : "http:";
        let a = "16137cec";

        if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
          return;
        }
        window.daum = window.daum || {};
        window.daum.roughmap = {
          cdn: a,
          URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
          url_protocal: c,
        };
        let b =
          c +
          "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
          a +
          "/roughmapLander.js";

        // document.write -> doumnet.body.append로 수정
        const scriptTag = document.createElement("script");
        scriptTag.src = b;
        document.body.appendChild(scriptTag);
        scriptTag.onload = () => {
          executeScript();
        };
      })();
    };

    // 실행 스크립트
    const executeScript = () => {
      const scriptTag = document.createElement("script");
      const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
        "timestamp" : "1740234367142",
        "key" : "2n5b6",
        "mapWidth" : "640",
        "mapHeight" : "360"
      }).render();`);
      scriptTag.appendChild(inlineScript);
      document.body.appendChild(scriptTag);
    };

    // 스크립트 로드 시작
    InstallScript();

    // 클린업 함수
    return () => {
      // 필요시 특정 스크립트 제거 로직 추가 가능
    };
  }, []);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title data-aos="fade-up">오시는 길</Title>
      </Divider>

      <FlowerContainer data-aos="fade-up">
        <FlowerImg src={FlowerImage} alt="꽃 이미지" />
      </FlowerContainer>

      <Map
        id="daumRoughmapContainer1740234367142"
        className="root_daum_roughmap root_daum_roughmap_landing"
        data-aos="fade-up"
      ></Map>

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