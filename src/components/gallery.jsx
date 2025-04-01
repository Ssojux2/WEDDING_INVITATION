import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

// 갤러리 이미지 가져오기
//import GalleryPhoto1 from "../assets/p1.jpeg";

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

const images = [
  {
    original: require("../assets/1.jpg"),
    thumbnail: require("../assets/1.jpg"),
    originalAlt: "웨딩 사진 1",
    thumbnailAlt: "썸네일 1"
  },
  {
    original: require("../assets/2.jpg"),
    thumbnail: require("../assets/2.jpg"),
    originalAlt: "웨딩 사진 2",
    thumbnailAlt: "썸네일 2"
  },
  {
    original: require("../assets/3.jpg"),
    thumbnail: require("../assets/3.jpg"),
    originalAlt: "웨딩 사진 3",
    thumbnailAlt: "썸네일 3"
  },
  {
    original: require("../assets/4.jpg"),
    thumbnail: require("../assets/4.jpg"),
    originalAlt: "웨딩 사진 4",
    thumbnailAlt: "썸네일 4"
  },
  {
    original: require("../assets/5.jpg"),
    thumbnail: require("../assets/5.jpg"),
    originalAlt: "웨딩 사진 5",
    thumbnailAlt: "썸네일 5"
  },
  {
    original: require("../assets/6.jpg"),
    thumbnail: require("../assets/6.jpg"),
    originalAlt: "웨딩 사진 6",
    thumbnailAlt: "썸네일 6"
  },
  {
    original: require("../assets/7.jpg"),
    thumbnail: require("../assets/7.jpg"),
    originalAlt: "웨딩 사진 7",
    thumbnailAlt: "썸네일 7"
  },
  {
    original: require("../assets/8.jpg"),
    thumbnail: require("../assets/8.jpg"),
    originalAlt: "웨딩 사진 8",
    thumbnailAlt: "썸네일 8"
  },
  {
    original: require("../assets/9.jpg"),
    thumbnail: require("../assets/9.jpg"),
    originalAlt: "웨딩 사진 9",
    thumbnailAlt: "썸네일 9"
  },
  {
    original: require("../assets/99.jpg"),
    thumbnail: require("../assets/99.jpg"),
    originalAlt: "웨딩 사진 99",
    thumbnailAlt: "썸네일 99"
  },
  {
    original: require("../assets/p1.jpeg"),
    thumbnail: require("../assets/p1.jpeg"),
    originalAlt: "웨딩 사진 p1",
    thumbnailAlt: "썸네일 p1"
  }
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