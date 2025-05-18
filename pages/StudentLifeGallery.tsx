import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Button, Typography, Modal } from "antd";
import { PlayCircleFilled, CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      zIndex: 10,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    }}
  >
    <RightOutlined style={{ color: "#0a2c64", fontSize: "16px" }} />
  </div>
);

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <div
    className="custom-arrow prev"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255,255,255,0.9)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      zIndex: 10,
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    }}
  >
    <LeftOutlined style={{ color: "#0a2c64", fontSize: "16px" }} />
  </div>
);

const StudentLifeGallery = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewMedia, setPreviewMedia] = useState("");
  const [isVideo, setIsVideo] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Sample data - replace with your actual media items
  const mediaItems = Array.from({ length: 34 }, (_, i) => ({
    id: i + 1,
    type: "image", // or "video" for video items
    src: `/images/ss${i + 1}.jpeg`
  }));

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          opacity: 0.7,
          transition: "all 0.3s",
          margin: "0 4px"
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  const handleMediaClick = (item: typeof mediaItems[0]) => {
    setPreviewMedia(item.src);
    setIsVideo(item.type === "video");
    setPreviewVisible(true);
  };

  const handleMouseEnter = (itemId: number) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section style={styles.galleryContainer}>

      <div style={styles.subHeadingContainer}>
        <Title level={3} style={styles.subHeadingTitle}>
          Student Situation Test Works
          <div style={styles.titleUnderline}></div>
        </Title>
      </div>

      <div style={styles.carouselContainer}>
        <Slider {...carouselSettings}>
          {mediaItems.map((item) => (
            <div key={item.id} style={styles.carouselItem}>
              <div
                className="media-card"
                style={{
                  ...styles.mediaCard,
                  transform: hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                  boxShadow: hoveredItem === item.id
                    ? "0 15px 30px rgba(0,0,0,0.2)"
                    : "0 5px 15px rgba(0,0,0,0.1)",
                  zIndex: hoveredItem === item.id ? 10 : 1,
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMediaClick(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Student Work ${item.id}`}
                    style={styles.galleryImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/default-image.jpeg";
                    }}
                  />
                ) : (
                  <div style={styles.videoThumbnail}>
                    <video
                      muted
                      loop
                      autoPlay
                      playsInline
                      style={styles.galleryImage}
                      src={item.src}
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
                )}
                <div
                  style={{
                    ...styles.imageOverlay,
                    opacity: hoveredItem === item.id ? 1 : 0,
                  }}
                >
                  <span style={styles.overlayText}>
                    {item.type === "video" ? "Watch Video" : "View Image"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Link href="/exploreGallery#studentWorks" passHref legacyBehavior>
        <Button
          type="primary"
          style={styles.exploreButton}
          size="large"
          className="explore-btn"
        >
          EXPLORE FULL GALLERY
        </Button>
      </Link>

      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
        width={isVideo ? 800 : 600}
        centered
        destroyOnClose
        closeIcon={
          <CloseOutlined style={{ color: "#fff", fontSize: "24px" }} />
        }
        bodyStyle={{ padding: 0 }}
      >
        {isVideo ? (
          <video
            controls
            autoPlay
            style={{ width: "100%", outline: "none" }}
            src={previewMedia}
          />
        ) : (
          <img alt="Preview" style={{ width: "100%" }} src={previewMedia} />
        )}
      </Modal>

      <style jsx global>{`
        .slick-dots.slick-thumb {
          bottom: -30px;
        }
        .slick-dots.slick-thumb li {
          margin: 0 4px;
        }
        .slick-dots.slick-thumb li div {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .slick-dots.slick-thumb li.slick-active div {
          background: #0a2c64;
          opacity: 1;
          transform: scale(1.2);
        }
        .custom-arrow {
          display: none !important;
        }
        @media (min-width: 768px) {
          .custom-arrow {
            display: flex !important;
          }
          .custom-arrow:hover {
            transform: translateY(-50%) scale(1.1);
            background: #0a2c64 !important;
          }
          .custom-arrow:hover svg {
            color: white !important;
          }
        }
        .explore-btn {
          transition: all 0.3s ease !important;
        }
        .explore-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 15px 30px rgba(251, 176, 52, 0.4) !important;
        }
        .media-card:hover {
          transform: scale(1.05) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2) !important;
        }
      `}</style>
    </section>
  );
};

const styles = {
  galleryContainer: {
    backgroundColor: "#f9f9f9",
    textAlign: "center" as const,
    position: "relative" as const,
    overflow: "hidden",
  },
  galleryTitle: {
    color: "#0a2c64",
    marginBottom: "15px",
    fontWeight: 700 as const,
    fontSize: "32px",
    letterSpacing: "1px",
  },
  subHeadingContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "0",
  },
  subHeadingTitle: {
    marginLeft: "0",
    fontSize: "26px",
    marginBottom: "5px",
  },
  titleUnderline: {
    height: "3px",
    width: "50px",
    background: "#fbb034",
    margin: "0 auto 30px",
    borderRadius: "2px",
    boxShadow: "0 2px 5px rgba(251, 176, 52, 0.3)",
  },
  carouselContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 20px",
    position: "relative" as const,
  },
  carouselItem: {
    padding: "10px 5px",
    outline: "none",
    transition: "all 0.5s ease",
  },
  mediaCard: {
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative" as const,
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    height: "320px",
    cursor: "pointer",
    margin: "0 15px",
  },
  videoThumbnail: {
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
    background: "linear-gradient(to top, rgba(10,44,100,0.8) 0%, rgba(10,44,100,0.3) 50%, transparent 100%)",
    transition: "all 0.3s ease",
  },
  overlayText: {
    color: "white",
    fontSize: "16px",
    fontWeight: 600 as const,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  exploreButton: {
    marginTop: "40px",
    background: "linear-gradient(90deg, #ff5722, #ff9800)",
    border: "none",
    padding: "0 40px",
    height: "48px",
    fontSize: "18px",
    fontWeight: 600 as const,
    borderRadius: "25px",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    boxShadow: "0 5px 15px rgba(251, 176, 52, 0.3)",
  },
};

export default StudentLifeGallery;