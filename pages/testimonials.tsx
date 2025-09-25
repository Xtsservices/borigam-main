import React, { useState, useRef } from "react";
import { Carousel, Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { Title, Text, Paragraph } = Typography;

const Testimonials = [
  {
    name: "Meghana Pai",
    exam: "NID - M.DES (AMD)",
    rank: "AIR 3",
    content:
      '"Securing AIR 3 in NID was a dream achieved thanks to BORIGAM, their creative guidance and relentless focus on original thinking. Their personalized approach transformed my portfolio and design mindset!"',
    photo: "/images/meghana.jpeg",
  },
  {
    name: "Tharun N",
    exam: "NIFT - B.DES (BOM)",
    rank: "AIR 18",
    content:
      '"The intensive mock tests and personalized feedback sessions helped me refine my design sensibilities and time management skills – crucial for cracking NIFT\'s unique exam pattern."',
    photo: "/images/tharun.jpeg",
  },
  {
    name: "Tanmayee",
    exam: "NIFT - B.DES (HYD)",
    rank: "AIR 74",
    content:
      "\"When I first held my NIFT admit card with 'AIR 74' gleaming on it, I didn't just see a rank – I saw 74,000 hours of burning midnight oil, 74 rejected drafts before my perfect portfolio piece, and 74% extra grit when I wanted to quit. It was a TOTAL worth.\"",
    photo: "/images/tanmayee.jpeg",
  },
  {
    name: "Akshitha",
    exam: "NIFT - B.DES",
    rank: "AIR 767",
    content:
      '"AIR 767 in NIFT wasn\'t just a rank—it was my first yes in the world of design! BORIGAM transformed my self-doubt into a razor-sharp creative vision, turning my quirky perspectives into a standout portfolio. Felt very happy as I reach a step towards my goals."',
    photo: "/images/akshitha.jpeg",
  },
  {
    name: "Sonali",
    exam: "AAT, IIT Kharagpur",
    rank: "AIR 3057",
    content:
      '"Scoring AIR-3057 in AAT was my golden ticket to IIT Kharagpur. Those brutal 3AM sketching drills and spatial reasoning hacks transformed my raw passion into precision—now I\'m ready to build dreams in concrete and light!"',
    photo: "/images/sonali.jpeg",
  },
];

const TestimonialsIndex = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const carouselRef = useRef<any>(null);
  const router = useRouter();
  
  // Responsive breakpoint hooks
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: isMobile ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: isMobile,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  const handleViewAll = () => {
    router.push("/success-stories");
  };

  return (
    <div
      style={{
        marginTop: isMobile ? "-5rem" : isTablet ? "-7rem" : "-10rem",
        backgroundColor: "#f5f5f5",
        padding: isMobile ? "40px 0" : isTablet ? "60px 0" : "80px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "0 15px" : "0 20px",
        }}
      >
        {/* Header with title and View All button - RESPONSIVE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            marginBottom: isMobile ? "25px" : "40px",
            flexWrap: "wrap",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "15px" : "0",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#333",
              fontSize: isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2rem",
              fontWeight: 700,
              margin: 0,
              textAlign: isMobile ? "center" : "left",
              width: isMobile ? "100%" : "auto",
            }}
          >
            Student Success Stories
          </Title>
          <Button
            type="primary"
            onClick={handleViewAll}
            style={{
              backgroundColor: "#ff6b00",
              borderColor: "#ff6b00",
              fontWeight: 500,
              height: isMobile ? "45px" : "40px",
              padding: isMobile ? "0 30px" : "0 25px",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(255, 107, 0, 0.2)",
              width: isMobile ? "100%" : "auto",
              fontSize: isMobile ? "16px" : "14px",
            }}
          >
            View All Reviews
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: isMobile ? "25px" : "40px",
            flexWrap: "wrap",
            gap: isMobile ? "20px" : "0",
          }}
        >
          {/* Left Box - RESPONSIVE */}
          <div
            style={{
              flex: isMobile ? "none" : "1",
              minWidth: isMobile ? "100%" : "300px",
              backgroundColor: "#ff6b00",
              color: "white",
              padding: isMobile ? "30px 20px" : isTablet ? "35px" : "40px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(255, 107, 0, 0.3)",
              marginRight: isMobile ? "0" : "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Title
              level={2}
              style={{
                color: "white",
                fontSize: isMobile ? "1.75rem" : isTablet ? "2rem" : "2.5rem",
                fontWeight: 700,
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              BORIGAM SUCCESS STORIES
            </Title>
            <Paragraph
              style={{
                fontSize: isMobile ? "13px" : "14px",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Our design students' achievements showcase our commitment to
              nurturing creative excellence. Read inspiring journeys of those
              who made it to top design institutes with our guidance.
            </Paragraph>
          </div>

          {/* Right Carousel - RESPONSIVE */}
          <div
            style={{
              flex: isMobile ? "none" : "1.5",
              minWidth: isMobile ? "100%" : "300px",
              position: "relative",
              padding: isMobile ? "10px 0" : "20px 0",
            }}
          >
            {/* Navigation Arrows - Hidden on mobile */}
            {!isMobile && (
              <>
                <Button
                  shape="circle"
                  icon={<LeftOutlined />}
                  onClick={() => carouselRef.current.prev()}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "-25px",
                    transform: "translateY(-50%)",
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 2,
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                  }}
                />
                <Button
                  shape="circle"
                  icon={<RightOutlined />}
                  onClick={() => carouselRef.current.next()}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-25px",
                    transform: "translateY(-50%)",
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    zIndex: 2,
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "none",
                  }}
                />
              </>
            )}

            <Carousel ref={carouselRef} {...settings}>
              {Testimonials.map((testimonial, index) => (
                <div key={index} style={{ padding: "0 15px" }}>
                  <div
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                      transition: "all 0.4s ease",
                      height: "400px",
                      position: "relative",
                      transform:
                        hoveredCard === index ? "translateY(-10px)" : "none",
                    }}
                  >
                    {/* Top Image Section - disappears on hover */}
                    <div
                      style={{
                        height: hoveredCard === index ? "0%" : "40%",
                        backgroundImage: `url(${testimonial.photo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "all 0.4s ease",
                        position: "relative",
                        opacity: hoveredCard === index ? 0 : 1,
                      }}
                    >
                      {/* Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.2)",
                          transition: "all 0.4s ease",
                        }}
                      />
                    </div>

                    {/* Bottom Content Section */}
                    <div
                      style={{
                        height: hoveredCard === index ? "100%" : "60%",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: hoveredCard === index ? "center" : "flex-end",
                        transition: "all 0.4s ease",
                        position: "relative",
                      }}
                    >
                      {/* Student Info - positioned at bottom when not hovered */}
                      <div
                        style={{
                          position: "relative",
                          marginBottom: hoveredCard === index ? "20px" : "0",
                          transition: "all 0.4s ease",
                          color: "#333",
                          textAlign: hoveredCard === index ? "left" : "center",
                        }}
                      >
                        <Text
                          strong
                          style={{
                            display: "block",
                            fontSize: "18px",
                            color: "#ff6b00",
                            marginBottom: "4px",
                          }}
                        >
                          {testimonial.name}
                        </Text>
                        <Paragraph
                          style={{
                            fontSize: "14px",
                            color: "#ff6b00",
                            marginBottom: "4px",
                          }}
                        >
                          {testimonial.exam}
                        </Paragraph>
                        <Paragraph
                          style={{
                            fontSize: "14px",
                            color: "#ff6b00",
                            marginBottom: 0,
                            fontWeight: 500,
                          }}
                        >
                          Rank: {testimonial.rank}
                        </Paragraph>
                      </div>

                      {/* Content - appears on hover */}
                      <Paragraph
                        style={{
                          fontSize: "14px",
                          color: "#555",
                          marginBottom: 0,
                          opacity: hoveredCard === index ? 1 : 0,
                          height: hoveredCard === index ? "auto" : 0,
                          overflow: "hidden",
                          transition: "all 0.4s ease",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                        }}
                      >
                        {testimonial.content}
                      </Paragraph>

                      {/* Read Full Story button - disappears on hover */}
                      <div
                        style={{
                          opacity: hoveredCard === index ? 0 : 1,
                          height: hoveredCard === index ? 0 : "auto",
                          overflow: "hidden",
                          transition: "all 0.4s ease",
                          textAlign: "center",
                          paddingTop: "10px",
                        }}
                      >
                        <Button
                          type="primary"
                          style={{
                            backgroundColor: "#ff6b00",
                            borderColor: "#ff6b00",
                            fontWeight: 500,
                          }}
                        >
                          Read Full Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsIndex;