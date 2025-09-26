import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    adaptiveHeight: true,
    customPaging: (i: number) => (
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: 0.5,
        transition: 'all 0.2s',
        margin: '0 4px'
      }} />
    ),
    dotsClass: 'slick-dots slick-thumb',
  };

  const imageNames = ['top6.jpeg', 'top7.jpeg', 'top8.jpeg', 'top9.jpeg', 'top10.jpeg'];

  return (
    <div style={{ 
      position: 'relative',
      marginTop: '20px', /* Reduced from 70px */
      width: '100%',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '0px',
      paddingRight: '0px'
    }}>
      {/* Removed spacer div that was pushing content down */}

      {/* Image Carousel */}
      <div
        style={{
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          marginTop: '10px' /* Reduced from 60px */
        }}
      >
        <Slider {...carouselSettings}>
          {imageNames.map((name, index) => (
            <div key={name} style={{ outline: 'none' }}>
              <div style={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                minHeight: '300px',
              }}>
                <img
                  src={`/images/${name}`}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Full-width scrolling text section positioned right after carousel */}
      <div style={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        marginTop: '-20px'
      }}>
        <div
          style={{
            background: 'linear-gradient(90deg, #ff5722, #ff9800)',
            color: '#fffefc',
            marginTop: '50px',
            padding: '15px 0',
            overflow: 'hidden',
            fontFamily: '"Playfair Display", serif',
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '0.3px',
            lineHeight: '0.1'
          }}
        >
          <div className="scrolling-text">
            <span>Important Dates — Sessions for NID NIFT UCEED CEED NATA B.ARCH BFA Starts from April 2026— Situation test for NIFT NID and other college exams will start from March</span>
            <span>Important Dates — Sessions for NID NIFT UCEED CEED NATA B.ARCH BFA Starts from April 2026— Situation test for NIFT NID and other college exams will start from March</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .scrolling-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll-left-loop 60s linear infinite;
          }

          .scrolling-text span {
            display: inline-block;
            margin-top: 10px;
            padding-right: 80px;
          }

          @keyframes scroll-left-loop {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .slick-dots {
            position: absolute;
            bottom: 30px;
            display: flex !important;
            justify-content: center;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
          }

          .slick-dots li {
            position: relative;
            display: inline-block;
            margin: 0 5px;
            padding: 0;
            cursor: pointer;
          }

          .slick-dots li.slick-active div {
            opacity: 1;
            background-color: #ff5722;
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default CarouselComponent;
