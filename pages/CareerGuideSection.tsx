"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Typography } from "antd";
import { useRouter } from "next/navigation";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    setMounted(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = useCallback((link: string, index: number) => {
    setIsLoading(index);
    router.prefetch(link);
    router.push(link);
    const timer = setTimeout(() => setIsLoading(null), 1000);
    return () => clearTimeout(timer);
  }, [router]);

  const topCards = cardData.slice(0, 3);
  const bottomCards = cardData.slice(3, 6);

  return (
    <section style={{ marginBottom: 60, padding: "0 20px"}}>
      <style jsx global>{`
        .card-container {
          position: relative;
          height: 280px;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background-color: #fff;
          margin: 0 auto;
          z-index: 1;
          transform-style: preserve-3d;
          perspective: 1000px;
          opacity: 0;
          transform: translateY(40px);
          border: 2px solid rgba(255,255,255,0.1);
        }

        .card-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .card-container:hover {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          z-index: 10;
          border-color: rgba(251, 176, 52, 0.3);
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
          filter: brightness(0.9);
        }

        .card-container:hover .card-bg {
          transform: scale(1.1);
          filter: brightness(0.7);
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
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
        }

        .card-container:hover .card-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7));
        }

        .card-title {
          transition: all 0.4s ease;
          font-size: 18px;
          transform: translateY(0);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .card-container:hover .card-title {
          font-size: 22px;
          transform: translateY(-5px);
          text-shadow: 0 4px 8px rgba(0,0,0,0.4);
        }

        .card-description {
          transition: all 0.4s ease;
          font-size: 14px;
          opacity: 0.9;
          transform: translateY(0);
        }

        .card-container:hover .card-description {
          font-size: 16px;
          opacity: 1;
          transform: translateY(5px);
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

        .cards-row {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          gap: 24px;
          flex-wrap: wrap;
        }

        .card-col {
          flex: 0 0 calc(33.333% - 24px);
          max-width: calc(33.333% - 24px);
          padding: 0;
          transition: all 0.4s ease;
        }

        .card-col:hover {
          transform: scale(1.02);
        }

        @media (max-width: 992px) {
          .card-col {
            flex: 0 0 calc(50% - 16px);
            max-width: calc(50% - 16px);
          }
          
          .card-container {
            height: 240px;
          }
        }

        @media (max-width: 576px) {
          .card-col {
            flex: 0 0 100%;
            max-width: 100%;
          }
          
          .card-container {
            height: 200px;
          }
          
          .card-title {
            font-size: 16px;
          }
          
          .card-container:hover .card-title {
            font-size: 18px;
          }
          
          .card-description {
            font-size: 13px;
          }
          
          .card-container:hover .card-description {
            font-size: 14px;
          }
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title
          level={2}
          style={{
            color: "#0a2c64",
            marginTop: "8rem",
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

      {/* Top row with 3 cards */}
      <div className="cards-row">
        {topCards.map((card, index) => (
          <div 
            className="card-col" 
            key={index}
          >
            <div
              className={`card-container ${mounted ? 'card-visible' : ''}`}
              onClick={() => handleNavigation(card.link, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="card-overlay">
                <Title
                  level={4}
                  className="card-title"
                  style={{ 
                    marginBottom: 8,
                    color: 'white',
                  }}
                >
                  {card.title}
                </Title>
                <Text className="card-description" style={{ fontWeight: 500, color: "white" }}>
                  {card.description}
                </Text>
              </div>
              {isLoading === index && (
                <div className="loading-overlay">
                  <div className="spinner" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row with 3 cards */}
      <div className="cards-row">
        {bottomCards.map((card, index) => (
          <div 
            className="card-col" 
            key={index + 3}
          >
            <div
              className={`card-container ${mounted ? 'card-visible' : ''}`}
              onClick={() => handleNavigation(card.link, index + 3)}
              onMouseEnter={() => setHoveredCard(index + 3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${(index + 3) * 0.1}s`
              }}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="card-overlay">
                <Title
                  level={4}
                  className="card-title"
                  style={{ 
                    marginBottom: 8,
                    color: 'white',
                  }}
                >
                  {card.title}
                </Title>
                <Text className="card-description" style={{ fontWeight: 500, color: "white" }}>
                  {card.description}
                </Text>
              </div>
              {isLoading === index + 3 && (
                <div className="loading-overlay">
                  <div className="spinner" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}