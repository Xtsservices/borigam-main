"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Typography, Input } from "antd";
import { useRouter } from "next/router";
import Header from "../components/Header";

const { Title, Text } = Typography;
const { Search } = Input;

const cardData = [
  {
    title: "Product Design",
    image: "/images/productdesign.jpeg",
    description: "Design innovative products and solutions",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Design Consultant",
    image: "/images/designconsult.jpeg",
    description: "Provide expert design advice to clients",
    link: "/career-opportunity/DesignConsultant",
  },
  {
    title: "UI/UX Designer",
    image: "/images/uiux.jpeg",
    description: "Create user-friendly digital experiences",
    link: "/career-opportunity/uiux",
  },
  {
    title: "Automobile Design",
    image: "/images/automobile.jpeg",
    description: "Design vehicles and transportation systems",
    link: "/career-opportunity/AutomobileDesign",
  },
  {
    title: "Visual Communication Design",
    image: "/images/visualcomm.jpeg",
    description: "Create visual content for communication",
    link: "/career-opportunity/VisualCommunicationDesign",
  },
  {
    title: "Furniture Designer",
    image: "/images/furniture.jpeg",
    description: "Design functional and aesthetic furniture",
    link: "/career-opportunity/FurnitureDesigner",
  },
  {
    title: "Graphic Designer",
    image: "/images/graphic.jpeg",
    description: "Create visual concepts and designs",
    link: "/career-opportunity/GraphicDesigner",
  },
  {
    title: "Art Director",
    image: "/images/art.jpeg",
    description: "Oversee visual style and content",
    link: "/career-opportunity/ArtDirector",
  },
  {
    title: "Animation Specialist",
    image: "/images/animation.jpeg",
    description: "Create animated content and visuals",
    link: "/career-opportunity/AnimationSpecialist",
  },
  {
    title: "Industrial Designer",
    image: "/images/industrial.jpeg",
    description: "Design products for mass production",
    link: "/career-opportunity/IndustrialDesigner",
  },
  {
    title: "Animator",
    image: "/images/animator.jpeg",
    description: "Bring characters and stories to life",
    link: "/career-opportunity/Animator",
  },
  {
    title: "Footwear Designer",
    image: "/images/footwear.jpeg",
    description: "Design shoes and footwear",
    link: "/career-opportunity/FootwearDesigner",
  },
  {
    title: "Fashion Designer",
    image: "/images/fashiondesigner.jpeg",
    description: "Create clothing and fashion items",
    link: "/career-opportunity/FashionDesigner",
  },
  {
    title: "Retail Designer",
    image: "/images/retailmanager.jpeg",
    description: "Design retail spaces and experiences",
    link: "/career-opportunity/RetailDesigner",
  },
  {
    title: "Visual Merchandiser",
    image: "/images/Visualmerc.jpeg",
    description: "Create appealing product displays",
    link: "/career-opportunity/VisualMerchandiser",
  },
  {
    title: "Product Manager",
    image: "/images/productmanager.jpeg",
    description: "Oversee product development",
    link: "/career-opportunity/ProductManager",
  },
  {
    title: "Leather Goods Designer",
    image: "/images/leathergoods.jpeg",
    description: "Design leather accessories and items",
    link: "/career-opportunity/LeatherGoodsDesigner",
  },
  {
    title: "Supply Chain Manager",
    image: "/images/supplychain.jpeg",
    description: "Manage product flow and logistics",
    link: "/career-opportunity/SupplyChainManager",
  },
  {
    title: "Textile Designer",
    image: "/images/textiledesi.jpeg",
    description: "Create patterns and designs for fabrics",
    link: "/career-opportunity/TextileDesigner",
  },
  {
    title: "Fashion Merchandiser",
    image: "/images/fashionmerc.jpeg",
    description: "Bridge fashion design and business",
    link: "/career-opportunity/FashionMerchandiser",
  },
  {
    title: "Fashion Entrepreneur",
    image: "/images/fashionentre.jpeg",
    description: "Start and run fashion businesses",
    link: "/career-opportunity/FashionEntrepreneur",
  },
  {
    title: "Fashion Stylist",
    image: "/images/fashionStyl.jpeg",
    description: "Create visual styles for individuals",
    link: "/career-opportunity/FashionStylist",
  },
  {
    title: "Accessory Designer",
    image: "/images/Accessory.jpeg",
    description: "Design fashion accessories",
    link: "/career-opportunity/AccessoryDesigner",
  },
  {
    title: "Packing Designer",
    image: "/images/packingdesigner.jpeg",
    description: "Design product packaging",
    link: "/career-opportunity/PackingDesigner",
  },
  {
    title: "Architect",
    image: "/images/architect.jpeg",
    description: "Design buildings and structures",
    link: "/career-opportunity/Architect",
  },
  {
    title: "Urban Planner",
    image: "/images/urbanplanner.jpeg",
    description: "Design city layouts and spaces",
    link: "/career-opportunity/UrbanPlanner",
  },
  {
    title: "Interior Designer",
    image: "/images/interior.jpeg",
    description: "Design functional interior spaces",
    link: "/career-opportunity/InteriorDesigner",
  },
  {
    title: "Landscape Designer",
    image: "/images/landscape.jpeg",
    description: "Design outdoor spaces and gardens",
    link: "/career-opportunity/LandscapeDesigner",
  },
  {
    title: "Project Manager",
    image: "/images/productmanager.jpeg",
    description: "Oversee design projects",
    link: "/career-opportunity/ProductManager",
  },
  {
    title: "3D Visualizer",
    image: "/images/3d.jpeg",
    description: "Create 3D representations of designs",
    link: "/career-opportunity/3DVisualizer",
  },
  {
    title: "Sustainability Consultant",
    image: "/images/sustain.jpeg",
    description: "Advise on eco-friendly design",
    link: "/career-opportunity/SustainabilityConsultant",
  },
  {
    title: "Construction Manager",
    image: "/images/construction.jpeg",
    description: "Oversee building construction",
    link: "/career-opportunity/ConstructionManager",
  },
  {
    title: "Illustrator",
    image: "/images/illustrator.jpeg",
    description: "Create artwork and illustrations",
    link: "/career-opportunity/Illustrator",
  },
  {
    title: "Freelancer",
    image: "/images/freelancer.jpeg",
    description: "Work independently on design projects",
    link: "/career-opportunity/Freelancer",
  },
  {
    title: "Fine Arts",
    image: "/images/finearts.jpeg",
    description: "Create artistic works and pieces",
    link: "/career-opportunity/FineArts",
  },
];

export default function CareerOpportunities() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleRows, setVisibleRows] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Preload images for better hover performance
    cardData.forEach((card) => {
      const img = new Image();
      img.src = card.image;
    });
  }, []);

  const filteredCards = cardData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Animate rows one by one
    const timer = setInterval(() => {
      setVisibleRows((prev) => {
        const cardsPerRow = isMobile ? 1 : 3;
        const maxRows = Math.ceil(filteredCards.length / cardsPerRow);
        return prev < maxRows ? prev + 1 : prev;
      });
    }, 300); // 300ms delay between rows

    return () => clearInterval(timer);
  }, [isMobile, filteredCards.length]);

  const handleNavigation = useCallback(
    (link: string, index: number) => {
      setIsLoading(index);
      router
        .push(link)
        .then(() => setIsLoading(null))
        .catch(() => setIsLoading(null));
    },
    [router]
  );

  // Group cards into rows for line-by-line animation
  const cardsPerRow = isMobile ? 1 : 3;
  const groupedCards = [];
  for (let i = 0; i < filteredCards.length; i += cardsPerRow) {
    groupedCards.push(filteredCards.slice(i, i + cardsPerRow));
  }

  return (
    <>
      <Header />
      <section
        style={{
          marginTop: "6rem",
          padding: "60px 20px",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          perspective: "1200px",
        }}
      >
        <style jsx global>{`
          @keyframes cardEntrance {
            0% {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes popOut {
            0% {
              transform: translateZ(0);
            }
            100% {
              transform: translateZ(50px);
            }
          }

          .card-container {
            position: relative;
            height: 300px;
            width: 100%;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
            transform-style: preserve-3d;
            will-change: transform;
            opacity: 0;
          }

          .card-container.visible {
            animation: cardEntrance 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)
              forwards;
          }

          .card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: 1;
            opacity: 0.9;
            transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
            transform-style: preserve-3d;
          }

          .card-container:hover {
            transform: scale(1.15) translateZ(50px) rotateX(-5deg) rotateY(5deg);
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
            z-index: 100 !important;
          }

          .card-container:hover .card-bg {
            transform: scale(1.1) translateZ(20px);
            opacity: 1;
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: white;
            text-align: center;
            transition: all 0.5s ease;
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0.7) 100%
            );
            transform-style: preserve-3d;
          }

          .card-container:hover .card-overlay {
            background: linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.6) 0%,
              rgba(0, 0, 0, 0.95) 100%
            );
            transform: translateZ(30px);
          }

          .card-title {
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            font-size: 1.8rem;
            margin-bottom: 12px;
            text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
            transform: translateZ(20px);
          }

          .card-description {
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            font-size: 1.1rem;
            opacity: 0.9;
            color: white;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
            max-width: 90%;
            transform: translateZ(15px);
          }

          .card-container:hover .card-title {
            transform: translateZ(40px) scale(1.1);
            font-size: 2rem;
          }

          .card-container:hover .card-description {
            transform: translateZ(30px) scale(1.05);
            opacity: 1;
            font-size: 1.2rem;
          }

          .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
            transition: opacity 0.3s ease;
            transform-style: preserve-3d;
            transform: translateZ(40px);
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #fff;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .search-container {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            padding: 1rem 20px;
            background: linear-gradient(
              90deg,
              #ff5722,
              #ff9800
            ); /* Gradient Background */
            border-radius: 8px; /* Optional: Add rounded corners */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Optional: Add some shadow */
          }

          .ant-input-affix-wrapper,
          .ant-input-search-button {
            border-radius: 12px !important;
            height: 48px;
          }

          .ant-input-search-button {
            background-color: #fa8c16 !important;
            border-color: #fa8c16 !important;
            color: white !important;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .ant-input-search-button:hover {
            background-color: #d46b08 !important;
            border-color: #d46b08 !important;
            transform: translateX(2px);
          }

          .ant-input {
            border-color: #fa8c16 !important;
            font-size: 16px;
          }

          .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px;
            color: #666;
            font-size: 20px;
            animation: cardEntrance 0.6s ease forwards;
          }

          @media (max-width: 992px) {
            .card-container:hover {
              transform: scale(1.15) translateZ(40px);
            }
          }

          @media (max-width: 768px) {
            .card-container {
              height: 250px;
            }

            .card-title {
              font-size: 1.5rem;
            }

            .card-container:hover .card-title {
              font-size: 1.7rem;
            }

            .card-description {
              font-size: 1rem;
            }

            .card-container:hover {
              transform: scale(1.1) translateZ(30px);
            }
          }

          @media (max-width: 576px) {
            .ant-input-affix-wrapper {
              font-size: 14px;
            }

            .card-container {
              height: 220px;
            }

            .card-title {
              font-size: 1.3rem;
            }

            .card-container:hover .card-title {
              font-size: 1.5rem;
            }

            .card-container:hover {
              transform: scale(1.08) translateZ(20px);
            }
          }
        `}</style>

        <div style={{ textAlign: "center" }}>
          <Title
            level={1}
            style={{
              color: "#0a2c64",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: isMobile ? "28px" : "36px",
              fontWeight: 700,
              marginBottom: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Career Opportunities
          </Title>
          <div
            style={{
              height: "4px",
              width: "180px",
              background: "linear-gradient(90deg, #fbb034, #ff6b00)",
              margin: "12px auto 40px",
              borderRadius: "2px",
              opacity: 0.8,
            }}
          />
        </div>

        <div className="search-container">
          <Search
            placeholder="Search careers..."
            enterButton="Search"
            allowClear
            size="large"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSearch={(value) => setSearchTerm(value)}
            style={{ maxWidth: 600, width: "100%" }}
          />
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            transformStyle: "preserve-3d",
          }}
        >
          {filteredCards.length > 0 ? (
            groupedCards.map((row, rowIndex) => (
              <Row
                gutter={[24, 24]}
                justify="center"
                key={rowIndex}
                style={{
                  display: rowIndex < visibleRows ? "flex" : "none",
                  marginBottom: 24,
                }}
              >
                {row.map((card, cardIndex) => {
                  const index = rowIndex * cardsPerRow + cardIndex;
                  return (
                    <Col
                      xs={24}
                      sm={12}
                      md={8}
                      lg={8}
                      xl={8}
                      key={index}
                      style={{
                        padding: "12px",
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <div
                        className={`card-container ${
                          rowIndex < visibleRows ? "visible" : ""
                        }`}
                        onClick={() => handleNavigation(card.link, index)}
                        aria-label={`Explore ${card.title} career`}
                        style={{ animationDelay: `${cardIndex * 0.1}s` }}
                      >
                        <div
                          className="card-bg"
                          style={{ backgroundImage: `url(${card.image})` }}
                        />
                        <div className="card-overlay">
                          <Title
                            level={3}
                            className="card-title"
                            style={{
                              marginBottom: 12,
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            {card.title}
                          </Title>
                          <Text
                            className="card-description"
                            style={{ fontWeight: 500 }}
                          >
                            {card.description}
                          </Text>
                        </div>
                        {isLoading === index && (
                          <div className="loading-overlay">
                            <div className="spinner" />
                          </div>
                        )}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            ))
          ) : (
            <Row justify="center">
              <Col span={24}>
                <div className="no-results">
                  <p>No results found for "{searchTerm}"</p>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </section>
    </>
  );
}
