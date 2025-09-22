import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'antd';
import Link from 'next/link';

// All media files: images and videos
const mediaItems = [
  { type: 'image', src: '/images/lob1.png' },
  { type: 'video', src: '/images/lob27.mp4' },
  { type: 'image', src: '/images/lob5.png' },
  { type: 'video', src: '/images/lob6.mp4' },
  { type: 'image', src: '/images/lob7.png' },
  { type: 'image', src: '/images/lob8.png' },
  { type: 'video', src: '/images/lob9.mp4' },
  { type: 'image', src: '/images/lob10.png' },
  { type: 'video', src: '/images/lob11.mp4' },
  { type: 'image', src: '/images/lob12.jpeg' },
  { type: 'video', src: '/images/lob13.mp4' },
  { type: 'video', src: '/images/lob14.mp4' },
  { type: 'image', src: '/images/lob15.jpeg' },
  { type: 'video', src: '/images/lob16.mp4' },
  { type: 'image', src: '/images/lob17.jpeg' },
  { type: 'video', src: '/images/lob20.mp4' },
  { type: 'video', src: '/images/lob21.mp4' },
  { type: 'video', src: '/images/lob22.mp4' },
  { type: 'video', src: '/images/lob23.mp4' },
  { type: 'video', src: '/images/lob24.mp4' },
  { type: 'video', src: '/images/lob25.mp4' },
  { type: 'video', src: '/images/lob26.mp4' },
];

const MediaCarousel: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  const styles = {
    exploreButton: {
      marginTop: "40px",
      background: 'linear-gradient(90deg, #ff5722, #ff9800)',
      border: "none",
      padding: "0 40px",
      height: "48px",
      fontSize: "18px",
      fontWeight: 600 as const,
      borderRadius: "25px",
      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      boxShadow: "0 5px 15px rgba(251, 176, 52, 0.3)",
    }
  };

  return (
    <>
      {/* Inline style to make the arrows black and add spacing between slides */}
      <style>
        {`
          .slick-prev:before,
          .slick-next:before {
            color: orange !important;
          }
          .slick-slide {
            padding: 0 5px;
          }
        `}
      </style>
      <div style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{
            fontSize: '26px',
            fontWeight: 500,
            marginBottom: '5px',
          }}>
            Life at Borigam
          </h2>
          <div style={{
            width: '40px',
            height: '4px',
            backgroundColor: '#fbb034',
            margin: '0 auto 0px',
            borderRadius: '2px',
            boxShadow: 'rgba(251, 176, 52, 0.3) 0px 2px',
          }} />
        </div>

        <Slider {...settings}>
          {mediaItems.map((item, index) => (
            <div key={index}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                height: '300px',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`media-${index}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>

        {/* EXPLORE FULL GALLERY BUTTON */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/exploreGallery#lifeAtBorigam" passHref legacyBehavior>
            <Button
              type="primary"
              style={{
                ...styles.exploreButton,
                width: windowWidth <= 576 ? "90%" : "auto",
                fontSize: windowWidth <= 576 ? "16px" : "18px",
                padding: windowWidth <= 576 ? "0 20px" : "0 40px",
              }}
              size="large"
              className="explore-btn"
            >
              EXPLORE FULL GALLERY
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MediaCarousel;
