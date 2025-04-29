import React from "react";
import { Typography, Card } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const { Title } = Typography;

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
  { name: "World University of Design", url: "https://worlduniversityofdesign.ac.in/" },
  { name: "UID", url: "https://uid.edu.in/" },
  { name: "Ecole Intuit Lab", url: "https://ecole-intuit-lab.co.in/" },
  { name: "Pearl Academy", url: "https://www.pearlacademy.com/" },
  { name: "Amity University", url: "https://amity.edu/" },
  { name: "Parul University", url: "https://paruluniversity.ac.in/" },
  { name: "IIAD", url: "https://www.iiad.edu.in/" },
  { name: "MIT Pune", url: "https://mituniversity.ac.in/" },
  { name: "Avantika University", url: "https://www.avantikauniversity.edu.in/design/" },
  { name: "The Design Village", url: "https://www.thedesignvillage.org/" },
  { name: "AnantU", url: "https://anu.edu.in/" },
  { name: "LPU", url: "https://www.lpu.in/" },
  { name: "SIU", url: "https://www.siu.edu.in/" },
  { name: "BITS Pilani", url: "https://www.bits-pilani.ac.in/" },
  { name: "VIT", url: "https://vit.ac.in/" },
  { name: "Alliance University", url: "https://www.alliance.edu.in/" }
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
  { name: "CCA", url: "http://cca.edu.in/" }
];

const testimonials = [
  {
    name: "Riya Sharma",
    college: "NIFT Delhi",
    review: "Thanks to Borigam Coaching, I cracked NIFT with ease. Their mock tests and personal attention made the difference!"
  },
  {
    name: "Arjun Mehta",
    college: "CEPT Ahmedabad",
    review: "The support from mentors and well-planned curriculum helped me clear NATA with confidence. Highly recommend!"
  },
  {
    name: "Priya Patel",
    college: "NID Ahmedabad",
    review: "The portfolio guidance was exceptional. I got selected in my first attempt!"
  },
  {
    name: "Vikram Singh",
    college: "SPA Delhi",
    review: "The faculty's expertise in architecture helped me develop a strong foundation."
  }
];

const ScrollingBox: React.FC<ScrollingBoxProps> = ({ name, url }) => {
  const imageMapping: Record<string, string> = {
    "Alliance University": "alliance.jpeg",
    "Amity University": "amith.jpeg",
    "AnantU": "anu.jpeg",
    "Avantika University": "avantika.jpeg",
    "BITS Pilani": "bits.jpeg",
    "CCA": "cca.jpeg",
    "CEED": "ceed.jpeg",
    "CEPT": "cept.jpeg",
    "Ecole Intuit Lab": "ecole.jpeg",
    "IIAD": "iiad.jpeg",
    "IIT Kharagpur": "itikgp.jpeg",
    "IIT Roorkee": "iitr.jpeg",
    "Jamia Millia Islamia": "jmi.jpeg",
    "LPU": "lpu.jpeg",
    "MIT Pune": "mit.jpeg",
    "NID": "nid.jpeg",
    "NIFT": "NIFT_Logo.svg",
    "NIT Calicut": "nitc.jpeg",
    "Parul University": "parul.jpeg",
    "Pearl Academy": "pearl.jpeg",
    "Ramaiah University": "ramaiah.jpeg",
    "Sir JJ Architecture": "sirjj.jpeg",
    "SIU": "siu.jpeg",
    "SPA": "spa.jpeg",
    "Sri Sri University": "srisri.jpeg",
    "JNAFAU": "ssp.jpeg",
    "The Design Village": "thedesignvillage.jpeg",
    "UID": "uid.jpeg",
    "UCEED": "uceed.jpeg",
    "World University of Design": "wud.jpeg",
    "VIT": "logo.jpeg"
  };

  const imageFilename = imageMapping[name] || "logo.jpeg";
  const imageSrc = `/images/${imageFilename}`;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.style.background = '#f5f5f5';
      parent.innerHTML = `
        <div style="
          color: #666; 
          font-size: 12px;
          text-align: center;
          padding: 10px;
          width: 100%;
        ">
          ${name}
        </div>`;
    }
  };

  return (
    <div style={{
      display: 'inline-block',
      width: '200px',
      height: '150px',
      margin: '0 15px',
      flexShrink: 0
    }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px',
          boxSizing: 'border-box'
        }}>
          <img
            src={imageSrc}
            alt={`${name} logo`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '5px',
              boxSizing: 'border-box'
            }}
            onError={handleImageError}
          />
        </div>
      </a>
    </div>
  );
};

const AnimatedBoxesPage: React.FC = () => {
  const carouselSettings = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customTransition: "all 1s linear",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
      }
    },
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    transitionDuration: 1000
  };

  return (
    <div style={{
      padding: "40px 20px",
      backgroundColor: "#f5f7fa",
      minHeight: "100vh",
      maxWidth: 1200,
      margin: '0 auto'
    }}>

      {/* Design Colleges Section */}
      <div style={{ marginBottom: 60 }}>
        <div className="scroll-container" style={{ height: '180px' }}>
          <div className="scroll-content" style={{ display: 'flex', alignItems: 'center' }}>
            {[...designColleges, ...designColleges].map((college, index) => (
              <ScrollingBox key={`design-${index}`} name={college.name} url={college.url} />
            ))}
          </div>
        </div>
      </div>

      {/* Architecture Colleges Section */}
      <div style={{ marginBottom: 60 }}>
        <div className="scroll-container reverse" style={{ height: '180px' }}>
          <div className="scroll-content" style={{ display: 'flex', alignItems: 'center' }}>
            {[...architectureColleges, ...architectureColleges].map((college, index) => (
              <ScrollingBox key={`arch-${index}`} name={college.name} url={college.url} />
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section style={{
        padding: '40px 20px',
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: 40
      }}>
        <Title level={3} style={{ textAlign: 'center', color: '#2c3e50', marginBottom: 20 }}>
          TESTIMONIALS
        </Title>
        <div style={{
          width: 80,
          height: 4,
          backgroundColor: '#e67e22',
          margin: '0 auto 30px auto',
          borderRadius: 2
        }}></div>

        <Carousel {...carouselSettings}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              style={{
                margin: '0 10px',
                padding: 20,
                borderRadius: 8,
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 'bold', color: '#2c3e50' }}>{testimonial.name}</div>
              <div style={{ color: '#666', marginBottom: 10 }}>{testimonial.college}</div>
              <div style={{ fontStyle: 'italic' }}>"{testimonial.review}"</div>
            </Card>
          ))}
        </Carousel>
      </section>

      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          padding: 10px 0;
        }

        .scroll-container::before,
        .scroll-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 60px;
          height: 100%;
          z-index: 2;
        }

        .scroll-container::before {
          left: 0;
          background: linear-gradient(to right, #f5f7fa, transparent);
        }

        .scroll-container::after {
          right: 0;
          background: linear-gradient(to left, #f5f7fa, transparent);
        }

        .scroll-content {
          display: inline-block;
          animation: scroll 5s linear infinite;
        }

        .reverse .scroll-content {
          animation-direction: reverse;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .scroll-container::before,
          .scroll-container::after {
            width: 30px;
          }
        }

        a:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AnimatedBoxesPage;