import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import AppFooter from '../components/Footer';
import { motion } from 'framer-motion';

const videoLinks = [
  "https://youtu.be/qR9Uu9w9aMg",
  "https://youtu.be/s0deY2c1E18",
  "https://youtu.be/XNCyeh2jEC4",
  "https://youtu.be/KlCvUVQL28k",
  "https://youtu.be/_MLkkvWLMNg",
  "https://youtu.be/BfdbpS-Crag",
  "https://youtu.be/hFcKkso7k10",
  "https://youtu.be/POBTVum-a1k",
  "https://youtu.be/CIo24etQ-cU",
];

const getEmbedUrl = (url: string) => {
  const videoId = url.split("youtu.be/")[1]?.split("?")[0];
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`;
};

const Blog = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Blog – Borigam | Tips & Insights for NID, NATA, UCEED, CEED, BFA & NIFT Entrance Exams</title>
        <meta name="description" content="Read the Borigam Blog for expert tips, preparation strategies, study guides & insights on NID, NATA, UCEED, CEED, BFA & NIFT entrance exams. Stay updated & boost your success."></meta>
          <meta name="keywords" content="Borigam, Nift Coaching, NID coaching, Nata coaching, Ceed Coaching, Uceed coaching, Nift coaching near me, NID coaching near me, Nata coaching centres" />
        <link rel="canonical" href="https://borigaminstitute.in/blog/" />
          <meta name="robots" content="index, follow" />
      </Head>
      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-column">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h1 style={{
                color: '#0a2c64',
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '2.4rem',
                fontWeight: 800,
                marginBottom: '18px',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}>
                Borigam Blog – Your Guide to Design & Architecture Entrance Success
              </h1>
            </div>
            <h1>Blogs</h1>
            <div className="videos-grid">
              {videoLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="video-container"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.15,
                    zIndex: 10,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="video">
                    <iframe
                      src={getEmbedUrl(link)}
                      title={`YouTube Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-overlay">
                    <div className="play-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-container {
          width: 100%;
          padding: 1rem;
          margin: 10rem auto;
        }

        .content-wrapper {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .left-column {
          flex: 1;
          width: 100%;
        }

        h1 {
          text-align: center;
          margin-bottom: 3rem;
          color: black;
          font-size: 2.5rem;
          font-weight: 700;
          position: relative;
        }

        h1:after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ff5722, #ff9800); /* Gradient Background */
          margin: 0.5rem auto 0;
          border-radius: 2px;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }

        .video-container {
          width: 100%;
          position: relative;
          z-index: 1;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transform-origin: center center;
        }

        .video {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          background: #000;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .play-icon {
          transform: scale(0.8);
          transition: all 0.3s ease;
          opacity: 0.9;
        }

        .video-container:hover .video-overlay {
          opacity: 1;
        }

        .video-container:hover .play-icon {
          transform: scale(1);
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
          }

          .videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .main-container {
            margin: 8rem auto;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          .videos-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            margin: 6rem auto;
            padding: 0.5rem;
          }

          h1 {
            font-size: 1.8rem;
          }

          .videos-grid {
            grid-template-columns: 1fr;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;