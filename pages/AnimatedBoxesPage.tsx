import { motion } from "framer-motion";
import React from "react";

interface College {
  name: string;
  url: string;
}

interface ScrollingBoxProps {
  name: string;
  url: string;
}

const designColleges: College[] = [
  { name: "NIFT", url: "https://nift.ac.in/" },
  { name: "NID", url: "https://www.nid.edu/" },
  { name: "UCEED", url: "https://www.uceed.iitb.ac.in/" },
  { name: "CEED", url: "https://www.ceed.iitb.ac.in/" },
  {
    name: "World University of Design",
    url: "https://worlduniversityofdesign.ac.in/",
  },
  { name: "UID", url: "https://uid.edu.in/" },
  { name: "Ecole Intuit Lab", url: "https://ecole-intuit-lab.co.in/" },
  { name: "Pearl Academy", url: "https://www.pearlacademy.com/" },
  { name: "Amity University", url: "https://amity.edu/" },
  { name: "Parul University", url: "https://paruluniversity.ac.in/" },
  { name: "IIAD", url: "https://www.iiad.edu.in/" },
  { name: "MIT Pune", url: "https://mituniversity.ac.in/" },
  {
    name: "Avantika University",
    url: "https://www.avantikauniversity.edu.in/design/",
  },
  { name: "The Design Village", url: "https://www.thedesignvillage.org/" },
  { name: "AnantU", url: "https://anu.edu.in/" },
  { name: "LPU", url: "https://www.lpu.in/" },
  { name: "SIU", url: "https://www.siu.edu.in/" },
  { name: "BITS Pilani", url: "https://www.bits-pilani.ac.in/" },
  { name: "VIT", url: "https://vit.ac.in/" },
  { name: "Alliance University", url: "https://www.alliance.edu.in/" },
];

const architectureColleges: College[] = [
  { name: "CEPT", url: "https://cept.ac.in/" },
  { name: "JNAFAU", url: "https://ssp.jnafau.ac.in/" },
  { name: "SPA", url: "https://spa.ac.in/" },
  { name: "NIT Calicut", url: "https://nitc.ac.in/" },
  { name: "Sri Sri University", url: "https://srisriuniversity.edu.in/" },
  { name: "Sir JJ Architecture", url: "http://www.sirjjarchitecture.org/" },
  { name: "IIT Roorkee", url: "https://www.iitr.ac.in/" },
  { name: "Jamia Millia Islamia", url: "https://jmi.ac.in/" },
  { name: "IIT Kharagpur", url: "https://www.iitkgp.ac.in/" },
  { name: "Ramaiah University", url: "https://ramaiahuniversity.com/" },
  { name: "CCA", url: "http://cca.edu.in/" },
];

const ScrollingBox: React.FC<ScrollingBoxProps> = ({ name, url }) => {
  const imageMapping: Record<string, string> = {
    "Alliance University": "alliance.jpeg",
    "Amity University": "amith.jpeg",
    AnantU: "anu.jpeg",
    "Avantika University": "avantika.jpeg",
    "BITS Pilani": "bits.jpeg",
    CCA: "cca.jpeg",
    CEED: "ceed.jpeg",
    CEPT: "cept.jpeg",
    "Ecole Intuit Lab": "ecole.jpeg",
    IIAD: "iiad.jpeg",
    "IIT Kharagpur": "iitkgp.jpeg",
    "IIT Roorkee": "iitr.jpeg",
    "Jamia Millia Islamia": "jmi.jpeg",
    LPU: "lpu.jpeg",
    "MIT Pune": "mit.jpeg",
    NID: "nid.jpeg",
    NIFT: "NIFT_Logo.svg",
    "NIT Calicut": "nitc.jpeg",
    "Parul University": "parul.jpeg",
    "Pearl Academy": "pearl.jpeg",
    "Ramaiah University": "ramaiah.jpeg",
    "Sir JJ Architecture": "sirjj.jpeg",
    SIU: "siu.jpeg",
    SPA: "spa.jpeg",
    "Sri Sri University": "srisri.jpeg",
    JNAFAU: "ssp.jpeg",
    "The Design Village": "thedesignvillage.jpeg",
    UID: "uid.jpeg",
    UCEED: "uceed.jpeg",
    "World University of Design": "wud.jpeg",
    VIT: "vit.jpeg",
  };

  const imageFilename = imageMapping[name] || "logo.jpeg";
  const imageSrc = `/images/${imageFilename}`;

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const parent = target.parentElement;
    if (parent) {
      parent.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      parent.style.display = "flex";
      parent.style.alignItems = "center";
      parent.style.justifyContent = "center";
      parent.innerHTML = `<div style="color: white; font-size: 16px; font-weight: 600;">${name}</div>`;
    }
  };

  return (
    <motion.div
      className="motion-div"
      whileHover={{ scale: 1.2, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{
        fontFamily: "Open Sans, sans-serif",
        display: "inline-block",
        width: "220px",
        height: "160px",
        margin: "0 15px",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <img
              src={imageSrc}
              alt={`${name} logo`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "all 0.3s ease",
                filter: "grayscale(20%)",
              }}
              onError={handleImageError}
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                padding: "20px",
              }}
            >
              {name}
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const AnimatedBoxesPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "40px 0",
        marginLeft:'-50px' ,
        marginRight:'-50px',
        minHeight: "100vh",
        maxWidth: "120%",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Design Colleges Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            color: "#0a2c64",
            fontWeight: "550",
            marginBottom: "10px",
          }}
        >
          Top Design Colleges
        </p>
        <div
          style={{
            height: "3px",
            width: "80px",
            background: "linear-gradient(90deg, #fbb034, #ff5722)",
            margin: "0 auto 30px",
            borderRadius: "3px",
            marginBottom: "-30px",
          }}
        ></div>
      </div>

      <div
        style={{
          marginBottom: "30px",
          padding: "30px 0",
          position: "relative",
        }}
      >
        <div
          className="scroll-container"
          style={{
            height: "220px",
            position: "relative",
            margin: "0 calc(-50vw + 50%)",
            padding: "20px 0",
          }}
        >
          <div
            className="scroll-content design-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              height: "100%",
            }}
          >
            {[...designColleges, ...designColleges].map((college, index) => (
              <ScrollingBox
                key={`design-${index}`}
                name={college.name}
                url={college.url}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Colleges Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            color: "#0a2c64",
            fontWeight: "550",
            marginBottom: "10px",
          }}
        >
          Top Architecture Colleges
        </p>
        <div
          style={{
            height: "3px",
            width: "80px",
            background: "linear-gradient(90deg, #fbb034, #ff5722)",
            margin: "0 auto 30px",
            borderRadius: "3px",
            marginBottom: "-30px",
          }}
        ></div>
        <div
          style={{
            height: "3px",
            width: "80px",
            margin: "0 auto 30px",
            borderRadius: "3px",
          }}
        ></div>
      </div>

      <div
        style={{
          marginBottom: "40px",
          padding: "30px 0",
          position: "relative",
        }}
      >
        <div
          className="scroll-container"
          style={{
            height: "220px",
            position: "relative",
            margin: "0 calc(-50vw + 50%)",
            padding: "20px 0",
          }}
        >
          <div
            className="scroll-content arch-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              height: "100%",
            }}
          >
            {[...architectureColleges, ...architectureColleges].map(
              (college, index) => (
                <ScrollingBox
                  key={`arch-${index}`}
                  name={college.name}
                  url={college.url}
                />
              )
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scroll-container {
          margin-left:20px;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .scroll-container::before,
        .scroll-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .scroll-container::before {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(245, 247, 250, 1) 0%,
            rgba(245, 247, 250, 0) 100%
          );
        }

        .scroll-container::after {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(245, 247, 250, 1) 0%,
            rgba(245, 247, 250, 0) 100%
          );
        }

        .design-scroll {
          animation: scroll 70s linear infinite;
        }

        .arch-scroll {
          animation: scroll 40s linear infinite reverse;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container:hover .scroll-content {
          animation-play-state: paused;
        }

        .motion-div:hover .overlay {
          opacity: 1 !important;
        }

        .motion-div:hover img {
          filter: grayscale(0%) brightness(0.7);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .scroll-container::before,
          .scroll-container::after {
            width: 50px;
          }
          h1 {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .scroll-container {
            height: 180px;
          }

          h1 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBoxesPage;
