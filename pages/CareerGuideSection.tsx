"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Typography, Card } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Title, Text } = Typography;

type CardItem = {
  title: string;
  image: string;
  link: string;
  description: string;
};

const cardData: CardItem[] = [
  {
    title: "Design Entrances",
    image: "/images/design.png",
    description: "NIFT, NID, UCEED, CEED and more",
    link: "/career/design-entrance-exams"
  },
  {
    title: "BFA / Interiors",
    image: "/images/bfi.jpeg",
    description: "Bachelor of Fine Arts programs",
    link: "/career/bfa-entrance-exams"
  },
  {
    title: "Portfolio/situation test",
    image: "/images/top.jpeg",
    description: "Specialized coaching for top colleges",
    link: "/career/portfolio-coaching"
  },
  {
    title: "Architecture Entrance",
    image: "/images/architecture.png",
    description: "NATA, JEE B.Arch, and other exams",
    link: "/career/architecture-entrance-exams"
  },
  {
    title: "Foundation Batch",
    image: "/images/foundationBatch.jpeg",
    description: "For early starters in design field",
    link: "/career/foundation-batch-coaching"
  },
  {
    title: "Advance Batch",
    image: "/images/foundation.jpeg",
    description: "For serious aspirants",
    link: "/career/advance-batch-coaching"
  },
];

export default function CareerOpportunities() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = useCallback((link: string, index: number) => {
    setIsLoading(index);
    // Prefetch the route for faster navigation
    router.prefetch(link);
    setTimeout(() => {
      router.push(link);
      setIsLoading(null);
    }, 0);
  }, [router]);

  return (
    <section style={{ marginBottom: 60 }}>
      <style jsx>{`
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
          Your Career guide at Every Step
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

      <Row gutter={[24, 24]} justify="center">
        {cardData.map((card, index) => (
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
                <Text style={{ fontWeight: 500 ,color:"white" }}>
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
        ))}
      </Row>
    </section>
  );
}