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

const latestNews = [
  "🚀 New online course on JavaScript launched!",
  "📚 Admissions open for 2025 batch.",
  "📰 Our blog just crossed 10,000 views!",
  "🎓 Top 10 tips for clearing competitive exams.",
  "📢 Guest lecture by industry expert next week."
];

const Blog = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="left-column">
          <h1>Video Blog</h1>
          {videoLinks.map((link, index) => (
            <div className="video" key={index}>
              <iframe
                src={getEmbedUrl(link)}
                title={`YouTube Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Right Column - Latest News */}
        <aside style={{
          flex: 1,
          backgroundColor: '#f9f9f9',
          borderLeft: '4px solid orange',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <div>
            <h2 style={{
              backgroundColor: 'orange',
              color: 'white',
              padding: '10px',
              borderRadius: '4px 4px 0 0',
              marginBottom: '20px'
            }}>
              LATEST NEWS
            </h2>
            <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8em' }}>
              <li>
                <strong>New Batches For NIFT, NID, U/CEED - 2025-26 Entrance Coaching. Batches Staring</strong><br />
                <small>BY BORIGAM | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>New Batches For NATA & JEE Architecture - 2025 Is Starting From 26th & 27th April</strong><br />
                <small>BY BORIGAM | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>NIFT | NID Situation Test - 2025 Batch Starts From 26th & 27th April, 25</strong><br />
                <small>BY BORIGAM | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>NATA 2025 Examination Dates Are Announced</strong><br />
                <small>BY BORIGAM | 08 FEB, 2025</small>
              </li>
            </ul>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <a href="#" style={{ color: 'orange', fontWeight: 'bold', textDecoration: 'none' }}>BROWSE ALL &raquo;</a>
            </div>
          </div>
        </aside>
      </div>
      <AppFooter />

      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          padding: 2rem;
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
        }

        h1 {
          text-align: center;
          margin-bottom: 2rem;
          color: #1e3a8a;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .video {
          margin-bottom: 2rem;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }

        .video iframe {
          position: absolute;
          margin-right:5rem;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        ul {
          padding-left: 1rem;
          list-style: disc;
        }

        li {
          margin-bottom: 0.75rem;
          font-size: 1rem;
          color: #374151;
        }

        @media (max-width: 768px) {
          .main-container {
            flex-direction: column;
          }

          .right-column {
            margin-top: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;
