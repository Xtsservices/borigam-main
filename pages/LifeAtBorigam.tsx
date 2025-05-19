import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Life at Borigam
        </h2>

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
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MediaCarousel;
