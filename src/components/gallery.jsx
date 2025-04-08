import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

// 갤러리 이미지 가져오기
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image6a from "../assets/6a.jpg"; // 추가됨
import image6b from "../assets/6b.jpg"; // 추가됨
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image8a from "../assets/8a.jpg"; // 추가됨
import image9 from "../assets/9.jpg";
import image99 from "../assets/99.jpg";
import imageP1 from "../assets/p1.jpeg"; // 기존 jpeg 파일 유지
import imageA from "../assets/a.jpg";
import imageA2 from "../assets/a2.jpg"; // 추가됨
import imageA3 from "../assets/a3.jpg"; // 추가됨
import imageA4 from "../assets/a4.jpg"; // 추가됨
import imageB from "../assets/b.jpg";
import imageC from "../assets/c.jpg";
import imageD from "../assets/d.jpg";
import imageE from "../assets/e.jpg";
import imageF from "../assets/f.jpg";

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
  /* 스타일은 이전과 동일하게 유지됩니다... */
  .image-gallery-thumbnail {
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;

    &.active {
      border: 3px solid var(--title-color);
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
    background-color: transparent;
  }

  /* === 이미지 및 전체화면 스타일 === */
  .image-gallery-image img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: 75vh; /* 모바일 세로 길이 제한 */
    border-radius: 8px;
  }

  .image-gallery-thumbnail img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .image-gallery-fullscreen-modal {
    z-index: 9999 !important;
  }

  /* === 화살표 위치 고정 (배경 제거 및 가독성 개선) === */
  .image-gallery-left-nav,
  .image-gallery-right-nav {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    padding: 15px !important;
    font-size: 2.5em !important;   /* 아이콘 크기 */
    color: white !important;       /* 아이콘 색상 */
    background-color: transparent !important; /* 배경색 투명하게 변경 */
    border-radius: 50% !important;
    z-index: 10 !important;
    outline: none !important;
    border: none !important;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); /* 텍스트 그림자 추가 */
    cursor: pointer;
    transition: color 0.3s ease, text-shadow 0.3s ease; /* 전환 효과 변경 */
  }

  .image-gallery-left-nav:hover,
  .image-gallery-right-nav:hover {
      color: #eee !important; /* 호버 시 아이콘 색상 약간 밝게 (선택 사항) */
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8); /* 호버 시 그림자 강조 */
  }

  .image-gallery-left-nav {
    left: 15px !important;
  }

  .image-gallery-right-nav {
    right: 15px !important;
  }

  /* 모바일 환경 조정 */
  @media (max-width: 768px) {
    .image-gallery-left-nav,
    .image-gallery-right-nav {
      padding: 10px !important;
      font-size: 2em !important;
    }
    .image-gallery-left-nav {
      left: 10px !important;
    }
    .image-gallery-right-nav {
      right: 10px !important;
    }
    .image-gallery.fullscreen .image-gallery-image img {
       max-height: 90vh;
    }
  }
`;

// images 배열에 새로 추가된 이미지 포함
const images = [
  { original: image1, thumbnail: image1, originalAlt: "웨딩 사진 1", thumbnailAlt: "썸네일 1" },
  { original: image2, thumbnail: image2, originalAlt: "웨딩 사진 2", thumbnailAlt: "썸네일 2" },
  { original: image3, thumbnail: image3, originalAlt: "웨딩 사진 3", thumbnailAlt: "썸네일 3" },
  { original: image4, thumbnail: image4, originalAlt: "웨딩 사진 4", thumbnailAlt: "썸네일 4" },
  { original: image5, thumbnail: image5, originalAlt: "웨딩 사진 5", thumbnailAlt: "썸네일 5" },
  { original: image6, thumbnail: image6, originalAlt: "웨딩 사진 6", thumbnailAlt: "썸네일 6" },
  { original: image6a, thumbnail: image6a, originalAlt: "웨딩 사진 6a", thumbnailAlt: "썸네일 6a" }, // 추가됨
  { original: image6b, thumbnail: image6b, originalAlt: "웨딩 사진 6b", thumbnailAlt: "썸네일 6b" }, // 추가됨
  { original: image7, thumbnail: image7, originalAlt: "웨딩 사진 7", thumbnailAlt: "썸네일 7" },
  { original: image8, thumbnail: image8, originalAlt: "웨딩 사진 8", thumbnailAlt: "썸네일 8" },
  { original: image8a, thumbnail: image8a, originalAlt: "웨딩 사진 8a", thumbnailAlt: "썸네일 8a" }, // 추가됨
  { original: image9, thumbnail: image9, originalAlt: "웨딩 사진 9", thumbnailAlt: "썸네일 9" },
  { original: image99, thumbnail: image99, originalAlt: "웨딩 사진 99", thumbnailAlt: "썸네일 99" },
  { original: imageP1, thumbnail: imageP1, originalAlt: "웨딩 사진 p1", thumbnailAlt: "썸네일 p1" }, // 유지
  { original: imageA, thumbnail: imageA, originalAlt: "웨딩 사진 a", thumbnailAlt: "썸네일 a" },
  { original: imageA2, thumbnail: imageA2, originalAlt: "웨딩 사진 a2", thumbnailAlt: "썸네일 a2" }, // 추가됨
  { original: imageA3, thumbnail: imageA3, originalAlt: "웨딩 사진 a3", thumbnailAlt: "썸네일 a3" }, // 추가됨
  { original: imageA4, thumbnail: imageA4, originalAlt: "웨딩 사진 a4", thumbnailAlt: "썸네일 a4" }, // 추가됨
  { original: imageB, thumbnail: imageB, originalAlt: "웨딩 사진 b", thumbnailAlt: "썸네일 b" },
  { original: imageC, thumbnail: imageC, originalAlt: "웨딩 사진 c", thumbnailAlt: "썸네일 c" },
  { original: imageD, thumbnail: imageD, originalAlt: "웨딩 사진 d", thumbnailAlt: "썸네일 d" },
  { original: imageE, thumbnail: imageE, originalAlt: "웨딩 사진 e", thumbnailAlt: "썸네일 e" },
  { original: imageF, thumbnail: imageF, originalAlt: "웨딩 사진 f", thumbnailAlt: "썸네일 f" }
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
          items={images} // 업데이트된 images 배열 사용
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