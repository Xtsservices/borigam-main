import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button, Typography, Modal, Row, Col, Image } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  PlayCircleFilled,
  CloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title } = Typography;

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="custom-arrow next"
    onClick={onClick}
    style={{
      position: "absolute",
      right: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "50px",
      height: "50px",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      zIndex: 10,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    }}
  >
    <RightOutlined style={{ color: "#0a2c64", fontSize: "20px" }} />
  </div>
);

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="custom-arrow prev"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-25px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "50px",
      height: "50px",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      zIndex: 10,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    }}
  >
    <LeftOutlined style={{ color: "#0a2c64", fontSize: "20px" }} />
  </div>
);

type MediaType = "image" | "gif" | "video";

const LifeAtBorigam = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewMedia, setPreviewMedia] = useState("");
  const [mediaType, setMediaType] = useState<MediaType>("image");
  const [fullGalleryVisible, setFullGalleryVisible] = useState(false);
  const [mediaTypes, setMediaTypes] = useState<Record<number, MediaType>>({});
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<any>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample media items - adjust according to your actual files
  const mediaItems = Array.from({ length: 29 }, (_, i) => i + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying && carouselRef.current) {
        carouselRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const determineMediaTypes = async () => {
      const types: Record<number, MediaType> = {};

      // Create a mapping of file extensions for each item
      const fileExtensions: Record<number, string> = {};

      // Based on your file list, we know which items are GIFs (2 and 4)
      mediaItems.forEach((item) => {
        if (item === 2 || item === 4) {
          fileExtensions[item] = "gif";
        } else if (
          item === 6 ||
          (item >= 9 && item <= 14) ||
          item === 16 ||
          item === 18 ||
          item >= 20
        ) {
          fileExtensions[item] = "mp4";
        } else {
          fileExtensions[item] = "jpeg";
        }
      });

      // Set media types based on the mapping
      mediaItems.forEach((item) => {
        const ext = fileExtensions[item];
        if (ext === "mp4") {
          types[item] = "video";
        } else if (ext === "gif") {
          types[item] = "gif";
        } else {
          types[item] = "image";
        }
      });

      setMediaTypes(types);
      setLoading(false);
    };

    determineMediaTypes();
  }, []);

  const handleMediaClick = (item: number) => {
    const type = mediaTypes[item];
    let mediaPath = "";

    switch (type) {
      case "video":
        mediaPath = `/images/lob${item}.mp4`;
        break;
      case "gif":
        mediaPath = `/images/lob${item}.gif`;
        break;
      case "image":
      default:
        mediaPath = `/images/lob${item}.jpeg`;
    }

    setPreviewMedia(mediaPath);
    setMediaType(type);
    setPreviewVisible(true);
  };

  const handleMouseEnter = (item: number) => {
    setHoveredItem(item);
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setIsAutoPlaying(true);
  };

  return (
    <section style={styles.galleryContainer}>
      <div style={styles.subHeadingContainer}>
        <Title level={3} style={styles.subHeadingTitle}>
          Life At Borigam
          <div style={styles.titleUnderline}></div>
        </Title>
      </div>

      {!loading && (
        <>
          <div style={styles.carouselContainer}>
            <Carousel
              ref={carouselRef}
              arrows
              dots={{ className: "custom-dots" }}
              slidesToShow={4}
              infinite
              draggable
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {mediaItems.map((item) => (
                <div key={item} style={styles.carouselItem}>
                  <div
                    className="media-card"
                    style={{
                      ...styles.imageCard,
                      transform:
                        hoveredItem === item ? "scale(1.1) translateY(-10px)" : "scale(1)",
                      boxShadow:
                        hoveredItem === item
                          ? "0 25px 50px rgba(0,0,0,0.4)"
                          : "0 8px 20px rgba(0,0,0,0.15)",
                      zIndex: hoveredItem === item ? 10 : 1,
                      margin: "0 15px",
                    }}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMediaClick(item)}
                  >
                    {mediaTypes[item] === "video" ? (
                      <div style={styles.videoContainer}>
                        <video
                          muted
                          loop
                          autoPlay
                          playsInline
                          preload="metadata"
                          style={{
                            ...styles.galleryImage,
                            transform:
                              hoveredItem === item ? "scale(1.1)" : "scale(1)",
                          }}
                        >
                          <source
                            src={`/images/lob${item}.mp4#t=0.1`}
                            type="video/mp4"
                          />
                        </video>
                        <div style={styles.playIcon}>
                          <PlayCircleFilled
                            style={{
                              fontSize: "48px",
                              color: "rgba(255,255,255,0.9)",
                            }}
                          />
                        </div>
                      </div>
                    ) : mediaTypes[item] === "gif" ? (
                      <div style={styles.gifContainer}>
                        <img
                          src={`/images/lob${item}.gif`}
                          alt={`Life at Borigam GIF ${item}`}
                          style={{
                            ...styles.galleryImage,
                            transform:
                              hoveredItem === item ? "scale(1.1)" : "scale(1)",
                          }}
                        />
                        <div style={styles.playIcon}>
                          <PlayCircleFilled
                            style={{
                              fontSize: "48px",
                              color: "rgba(255,255,255,0.9)",
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={`/images/lob${item}.jpeg`}
                        alt={`Life at Borigam ${item}`}
                        style={{
                          ...styles.galleryImage,
                          transform:
                            hoveredItem === item ? "scale(1.1)" : "scale(1)",
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/images/default-image.jpeg";
                        }}
                      />
                    )}
                    <div
                      style={{
                        ...styles.imageOverlay,
                        opacity: hoveredItem === item ? 1 : 0,
                        background: "linear-gradient(to top, rgba(10,44,100,0.8) 0%, rgba(10,44,100,0.3) 50%, transparent 100%)",

                      }}
                    >
                      <span style={styles.overlayText}>
                        {mediaTypes[item] === "video" ? "Watch Video" : "View Image"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <Link href="/exploreGallery#lifeAtBorigam" passHref legacyBehavior>
            <Button
              type="primary"
              style={styles.exploreButton}
              size="large"
              className="explore-btn"
            >
              EXPLORE FULL GALLERY
            </Button>
          </Link>
        </>
      )}

      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        width={mediaType === "video" ? 800 : 600}
        centered
        destroyOnClose
        closeIcon={
          <CloseOutlined style={{ color: "#fff", fontSize: "24px" }} />
        }
        bodyStyle={{ padding: 0 }}
      >
        {mediaType === "video" ? (
          <video
            controls
            autoPlay
            style={{
              width: "100%",
              display: "block",
              maxHeight: "80vh",
              outline: "none",
            }}
          >
            <source src={previewMedia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={previewMedia}
            alt="Preview"
            style={{
              width: "100%",
              display: "block",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/images/default-image.jpeg";
            }}
          />
        )}
      </Modal>

      <style jsx global>{`
        .slick-dots.custom-dots {
          bottom: -30px;
        }
        .slick-dots.custom-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ccc;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .slick-dots.custom-dots li.slick-active button {
          background: #ff5722;
          opacity: 1;
          transform: scale(1.2);
        }
        .custom-arrow:hover {
          transform: translateY(-50%) scale(1.15);
          background: #ff5722 !important;
        }
        .custom-arrow:hover svg {
          color: white !important;
        }
        .explore-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 30px rgba(251, 176, 52, 0.4) !important;
        }
        .media-card:hover {
          transform: scale(1.1) translateY(-10px) !important;
        }
        .slick-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .slick-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

const styles = {
  galleryContainer: {
    padding: "80px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center" as const,
    position: "relative" as const,
    overflow: "hidden",
  },
  galleryTitle: {
    color: "#0a2c64",
    marginBottom: "15px",
    fontWeight: 700 as const,
    fontSize: "36px",
    letterSpacing: "1px",
  },
  titleUnderline: {
    height: "4px",
    width: "60px",
    background: "#fbb034",
    margin: "0 auto 40px",
    borderRadius: "2px",
    boxShadow: "0 2px 5px rgba(251, 176, 52, 0.3)",
  },
  carouselContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 60px",
    position: "relative" as const,
  },
  carouselItem: {
    padding: "0 5px",
    outline: "none",
  },
  imageCard: {
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative" as const,
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    height: "320px",
    cursor: "pointer",
  },
  subHeadingContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "20px",
  },
  subHeadingTitle: {
    marginLeft: "4rem",
    fontSize: "30px",
    marginBottom: "5px",
  },
  videoContainer: {
    position: "relative" as const,
    width: "100%",
    height: "100%",
  },
  gifContainer: {
    position: "relative" as const,
    width: "100%",
    height: "100%",
  },
  playIcon: {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
    transition: "transform 0.4s ease",
  },
  imageOverlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "20px",
    transition: "all 0.3s ease",
  },
  overlayText: {
    color: "white",
    fontSize: "18px",
    fontWeight: 600 as const,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  exploreButton: {
    marginTop: "60px",
    background: "linear-gradient(90deg, #ff5722, #ff9800)",
    border: "none",
    padding: "0 40px",
    height: "50px",
    fontSize: "18px",
    fontWeight: 600 as const,
    borderRadius: "25px",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    boxShadow: "0 5px 15px rgba(251, 176, 52, 0.3)",
  },
};

export default LifeAtBorigam;