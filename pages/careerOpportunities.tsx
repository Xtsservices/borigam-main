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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    cardData.forEach(card => {
      const img = new Image();
      img.src = card.image;
    });
  }, []);

  const handleNavigation = useCallback((link: string, index: number) => {
    setIsLoading(index);
    setTimeout(() => {
      router.push(link);
      setIsLoading(null);
    }, 0);
  }, [router]);

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header/>
      <section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <style jsx global>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card-container {
            position: relative;
            height: 240px;
            width: 100%;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            animation: fadeInUp 0.6s ease forwards;
            background-color: #fff;
          }

          .card-container:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
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
            transition: transform 0.4s ease;
          }

          .card-container:hover .card-bg {
            transform: scale(1.1);
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
            transition: all 0.4s ease;
            background: rgba(0, 0, 0, 0.4);
          }

          .card-container:hover .card-overlay {
            background: rgba(0, 0, 0, 0.6);
          }

          .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3;
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
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .search-container {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            padding: 1rem 20px;
          }

          .ant-input-affix-wrapper,
          .ant-input-search-button {
            border-radius: 8px !important;
            height: 48px;
          }

          .ant-input-search-button {
            background-color: #fa8c16 !important;
            border-color: #fa8c16 !important;
            color: white !important;
            font-weight: 500;
            transition: background 0.3s ease;
          }

          .ant-input-search-button:hover {
            background-color: #d46b08 !important;
            border-color: #d46b08 !important;
          }

          .ant-input {
            border-color: #fa8c16 !important;
          }

          .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 40px;
            color: #999;
            font-size: 18px;
          }

          @media (max-width: 576px) {
            .ant-input-affix-wrapper {
              font-size: 14px;
            }
          }
        `}</style>

        <div style={{ textAlign: "center" }}>
          <Title
            level={2}
            style={{
              color: "#0a2c64",
              fontFamily: "'Open Sans', sans-serif",
              fontSize: isMobile ? "24px" : "30px",
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            Career Opportunities
          </Title>
          <div
            style={{
              height: "3px",
              width: "150px",
              backgroundColor: "#fbb034",
              margin: "10px auto 30px",
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
            style={{ maxWidth: 500, width: "100%" }}
          />
        </div>

        <Row gutter={[24, 24]} justify="center">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease ${index * 0.05}s forwards`,
                  opacity: 0
                }}
              >
                <div
                  className="card-container"
                  onClick={() => handleNavigation(card.link, index)}
                >
                  <div
                    className="card-bg"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="card-overlay">
                    <Title
                      level={4}
                      style={{ 
                        marginBottom: 8,
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {card.title}
                    </Title>
                    <Text style={{ fontWeight: 500, color: "white" }}>
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
            ))
          ) : (
            <Col span={24}>
              <div className="no-results">
                <p>No results found for "{searchTerm}"</p>
              </div>
            </Col>
          )}
        </Row>
      </section>
    </>
  );
}