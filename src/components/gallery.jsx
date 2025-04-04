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
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image99 from "../assets/99.jpg";
import imageP1 from "../assets/p1.jpeg";
import imageA from "../assets/a.jpg";
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
    /* box-shadow 제거 또는 조정 (선택) */
    /* box-shadow: 0 2px 5px rgba(0,0,0,0.2); */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); /* 텍스트 그림자 추가 */
    cursor: pointer;
    transition: color 0.3s ease, text-shadow 0.3s ease; /* 전환 효과 변경 */
  }

  .image-gallery-left-nav:hover,
  .image-gallery-right-nav:hover {
      /* background-color: rgba(0, 0, 0, 0.6) !important; */ /* 호버 시 배경색 제거 */
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

    /* 모바일 전체 화면 시 이미지 높이 제한 완화 (선택 사항) */
    .image-gallery.fullscreen .image-gallery-image img {
       max-height: 90vh;
    }
  }
`;

const images = [
  // 이미지 배열은 이전과 동일 ...
  {
    original: image1,
    thumbnail: image1,
    originalAlt: "웨딩 사진 1",
    thumbnailAlt: "썸네일 1"
  },
  {
    original: image2,
    thumbnail: image2,
    originalAlt: "웨딩 사진 2",
    thumbnailAlt: "썸네일 2"
  },
  {
    original: image3,
    thumbnail: image3,
    originalAlt: "웨딩 사진 3",
    thumbnailAlt: "썸네일 3"
  },
  {
    original: image4,
    thumbnail: image4,
    originalAlt: "웨딩 사진 4",
    thumbnailAlt: "썸네일 4"
  },
  {
    original: image5,
    thumbnail: image5,
    originalAlt: "웨딩 사진 5",
    thumbnailAlt: "썸네일 5"
  },
  {
    original: image6,
    thumbnail: image6,
    originalAlt: "웨딩 사진 6",
    thumbnailAlt: "썸네일 6"
  },
  {
    original: image7,
    thumbnail: image7,
    originalAlt: "웨딩 사진 7",
    thumbnailAlt: "썸네일 7"
  },
  {
    original: image8,
    thumbnail: image8,
    originalAlt: "웨딩 사진 8",
    thumbnailAlt: "썸네일 8"
  },
  {
    original: image9,
    thumbnail: image9,
    originalAlt: "웨딩 사진 9",
    thumbnailAlt: "썸네일 9"
  },
  {
    original: image99,
    thumbnail: image99,
    originalAlt: "웨딩 사진 99",
    thumbnailAlt: "썸네일 99"
  },
  {
    original: imageP1,
    thumbnail: imageP1,
    originalAlt: "웨딩 사진 p1",
    thumbnailAlt: "썸네일 p1"
  },
  {
    original: imageA,
    thumbnail: imageA,
    originalAlt: "웨딩 사진 a",
    thumbnailAlt: "썸네일 a"
  },
  {
    original: imageB,
    thumbnail: imageB,
    originalAlt: "웨딩 사진 b",
    thumbnailAlt: "썸네일 b"
  },
  {
    original: imageC,
    thumbnail: imageC,
    originalAlt: "웨딩 사진 c",
    thumbnailAlt: "썸네일 c"
  },
  {
    original: imageD,
    thumbnail: imageD,
    originalAlt: "웨딩 사진 d",
    thumbnailAlt: "썸네일 d"
  },
  {
    original: imageE,
    thumbnail: imageE,
    originalAlt: "웨딩 사진 e",
    thumbnailAlt: "썸네일 e"
  },
  {
    original: imageF,
    thumbnail: imageF,
    originalAlt: "웨딩 사진 f",
    thumbnailAlt: "썸네일 f"
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
          showFullscreenButton={true} /* 전체화면 버튼 활성화 확인 */
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