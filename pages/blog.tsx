import React from 'react';
import Header from '../components/Header';
import AppFooter from '../components/Footer';

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
  return `https://www.youtube.com/embed/${videoId}`;
};

const Blog = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="content-wrapper">
          <div className="left-column">
            <div className="videos-grid">
              {videoLinks.map((link, index) => (
                <div className="video-container" key={index}>
                  <div className="video">
                    <iframe
                      src={getEmbedUrl(link)}
                      title={`YouTube Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AppFooter />

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
          max-width: 1200px;
          margin: 0 auto;
        }

        .left-column {
          flex: 2;
        }

        .right-column {
          flex: 1;
          background: #f9fafb;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          height: fit-content;
          position: sticky;
          top: 1rem;
        }

        h1 {
          text-align: center;
          margin-bottom: 2rem;
          color: #1e3a8a;
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .video-container {
          width: 100%;
          position: relative;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .video-container:hover {
          transform: scale(1.05);
          z-index: 10;
        }

        .video {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          background: #000;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .video-container:hover .video {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
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
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 0.75rem;
          pointer-events: none;
        }

        .video-container:hover .video-overlay {
          opacity: 1;
        }

        ul {
          padding-left: 1.25rem;
          list-style: disc;
        }

        li {
          margin-bottom: 0.75rem;
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
          }

          .right-column {
            position: static;
            margin-top: 2rem;
          }
        }

        @media (max-width: 768px) {
          .videos-grid {
            grid-template-columns: 1fr;
          }

          .video-container:hover {
            transform: scale(1.03);
          }

          h1 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }

          h2 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            padding: 0.5rem;
          }

          .content-wrapper {
            gap: 1rem;
          }

          .right-column {
            padding: 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          li {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;