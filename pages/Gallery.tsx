import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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

const Gallery = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const carouselRef = useRef<any>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying && carouselRef.current) {
        carouselRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
      <Title level={2} style={styles.galleryTitle}>
        Our Gallery
      </Title>
      <div style={styles.titleUnderline}></div>

      <div style={styles.subHeadingContainer}>
        <Title level={3} style={styles.subHeadingTitle}>
          Student Sketches
          <div style={styles.titleUnderline}></div>
        </Title>
      </div>
      
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
          {[8,9,10,11,12,13].map((item) => (
            <div key={item} style={styles.carouselItem}>
              <div
                style={{
                  ...styles.imageCard,
                  transform: hoveredItem === item ? "scale(1.1) translateY(-10px)" : "scale(1)",
                  boxShadow:
                    hoveredItem === item
                      ? "0 20px 40px rgba(0,0,0,0.3)"
                      : "0 8px 20px rgba(0,0,0,0.15)",
                  zIndex: hoveredItem === item ? 10 : 1,
                  margin: "0 15px",
                }}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={`/images/${item}.jpeg`}
                    alt="Gallery image"
                    style={styles.galleryImage}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/default-image.jpeg";
                    }}
                  />
                </div>
                <div style={{
                  ...styles.imageOverlay,
                  opacity: hoveredItem === item ? 1 : 0,
                  background: "linear-gradient(to top, rgba(10,44,100,0.8) 0%, rgba(10,44,100,0.3) 50%, transparent 100%)"
                }}>
                  <span style={styles.overlayText}>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <Link href="/exploreGallery#studentSituation" passHref legacyBehavior>
        <Button 
          type="primary" 
          style={styles.exploreButton} 
          size="large"
          className="explore-btn"
        >
          EXPLORE FULL GALLERY
        </Button>
      </Link>

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
          background: #0a2c64;
          opacity: 1;
          transform: scale(1.2);
        }
        .custom-arrow:hover {
          transform: translateY(-50%) scale(1.15);
          background: #0a2c64 !important;
        }
        .custom-arrow:hover svg {
          color: white !important;
        }
        .explore-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(251, 176, 52, 0.4) !important;
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
  subHeadingContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '20px',
  },
  subHeadingTitle: {
    marginLeft: '4rem',
    fontSize: '30px',
    marginBottom: '5px',
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
    transition: "all 0.5s ease",
  },
  imageCard: {
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative" as const,
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    height: "320px",
    cursor: "pointer",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: "12px",
  },
  galleryImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
    transition: "transform 0.5s ease",
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
    background: 'linear-gradient(90deg, #ff5722, #ff9800)',
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

export default Gallery;