import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

// 갤러리 이미지 가져오기
import GalleryPhoto1 from "../assets/p1.jpeg";

const Wrapper = styled.div`
  padding-top: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.7rem; /* 1.125 * 1.5 = 1.7rem */
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const GalleryContainer = styled.div`
  .image-gallery-thumbnail {
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &.active {
      border: 3px solid var(--title-color); /* 2px → 3px */
    }
  }
  
  .image-gallery-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  .image-gallery-slide {
    border-radius: 8px;
    overflow: hidden;
  }
`;

// 이미지 배열 (실제 구현에서는 더 많은 이미지 추가 가능)
const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
    originalAlt: "웨딩 사진 1",
    thumbnailAlt: "썸네일 1"
  }
  // 더 많은 이미지 추가 가능
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider
        style={{ marginTop: 0, marginBottom: 32 }}
        plain
        data-aos="fade-up"
      >
        <Title>우리의 아름다운 순간</Title>
      </Divider>

      <GalleryContainer data-aos="fade-up">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showThumbnails={true}
          slideInterval={4000}
          slideDuration={450}
          lazyLoad={true}
        />
      </GalleryContainer>
    </Wrapper>
  );
};

export default Gallery;