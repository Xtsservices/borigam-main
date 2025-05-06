"use client";

import React from "react";
import { Row, Col, Typography } from "antd";
import { useRouter } from "next/router"; // For Next.js routing
import Header from '../components/Header';


const { Title, Text } = Typography;

const cardData = [
  {
    title: "Product Design",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Design Consultant",
    image: "/images/architecture.png",
    link: "/career/architecture",
  },
  {
    title: "UI/UX Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Automobile Design",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Visual Communication Design",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Furniture Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Graphic Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Art Director",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: " Animation Specialist",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Industrial Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Animator",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Footwear Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Fashion Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Retail Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Visual Merchandiser",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Product Manager",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Leather Goods Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Supply Chain Manager",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Textile Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Fashion Merchandiser",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Fahion Enterepreneur",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Fashion Stylist",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Accessory Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Packing Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Architect",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Urban Planner",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Interior Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Landscape Designer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Project Manager",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "3D Visualizer",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Sustainablility Consultant",
    image: "/images/pd.jpg",
    link: "/career-opportunity/productDesign",
  },
  {
    title: "Construction Manager",
    image: "/images/bfi.jpeg",
    description: "Bachelor of Fine Arts programs",
    link: "/career/bfa",
  },
  {
    title: "Illustrator",
    image: "/images/foundationBatch.jpeg",
    description: "For early starters in design field",
    link: "/career/foundation",
  },
  {
    title: "Frelancer",
    image: "/images/foundation.jpeg",
    description: "For serious aspirants",
    link: "/career/advance",
  },
  {
    title: "Fine Arts",
    image: "/images/top.jpeg",
    description: "Specialized coaching for top colleges",
    link: "/career/top",
  },
];

export default function CareerOpportunities() {
  const router = useRouter();

  const handleNavigate = (link: string) => {
    router.push(link);
  };

  return (
    <>
    <Header />
    <section style={{ marginBottom: 60, background: "transparent" }}>
      <style>
        {`
          .card-container {
            position: relative;
            height: 200px;
            width: 300px;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: all 0.5s ease;
            cursor: pointer;
          }

          .card-container:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }

          .card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            filter: blur(2px);
            transition: all 0.5s ease;
          }

          .card-container:hover .card-bg {
            filter: blur(0);
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            text-align: center;
            transition: all 0.5s ease;
          }

          .card-container:hover .card-overlay {
            background: rgba(247, 78, 11, 0.77);
          }

          .hover-effect {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom,  0%, transparent 100%);
            opacity: 0;
            transition: all 0.5s ease;
          }

          .card-container:hover .hover-effect {
            opacity: 1;
          }

          .clickable-text {
            cursor: pointer;
            transition: color 0.3s;
          }

          .clickable-text:hover {
            color:rgb(206, 164, 80);
            text-decoration: underline;
          }
        `}
      </style>

      <Title
        level={2}
        style={{
          fontWeight: 600,
          fontSize: 30,
          marginBottom: 0,
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        Career Opportunities
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {cardData.map((card, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <div
              className="card-container"
              onClick={() => handleNavigate(card.link)}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="card-overlay">
                <div className="hover-effect" />
                <Title
                  level={4}
                  className="clickable-text"
                  style={{
                    marginBottom: 8,
                    color: "#fff",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {card.title}
                </Title>
                <Text
                  className="clickable-text"
                  style={{
                    display: "block",
                    color: "#fff",
                    fontWeight: 500,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {card.description}
                </Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
    </>
  );
}
