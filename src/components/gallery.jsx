import React, { useState, useCallback } from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Note: In a real implementation, you would fetch these images differently
// For example, you could use GraphQL to query for all images in a directory
// This is a placeholder implementation

const Wrapper = styled.div`
  padding-top: 3rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.125rem;
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
      border: 2px solid var(--title-color);
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

// Using placeholder images until real images are added
const images = [
  {
    original: '/p1.jpeg',
    thumbnail: '/p1.jpeg',
    originalAlt: "Wedding photo 1",
    thumbnailAlt: "Thumbnail 1",
    loading: "lazy",
  },
  // Add more images as needed
];

const Gallery = () => {
  // State for gallery options
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [showFullscreenButton, setShowFullscreenButton] = useState(true);

  // Make the gallery responsive
  const renderItem = useCallback((item) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          loading={item.loading || "lazy"}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }, []);

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
          showFullscreenButton={showFullscreenButton}
          showThumbnails={showThumbnails}
          renderItem={renderItem}
          slideInterval={4000}
          slideDuration={450}
          lazyLoad={true}
        />
      </GalleryContainer>

      {/* Note: In a production app, you might want to add more photos or 
          implement a dynamic photo loading system using GraphQL */}
    </Wrapper>
  );
};

export default Gallery;