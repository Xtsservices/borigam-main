import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />

      {/* HERO SECTION with background image */}
      <section
        style={{
          backgroundImage: `url("/images/nata-banner.jpg")`, // Make sure banner.jpg is in /public
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Optional overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            
          </p>
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
            About Us
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Column - About Section */}
        <div style={{ flex: 3, paddingRight: "30px" }}>
          <h1>Why choose Borigam?</h1>

          <h3>Sculpting Creative Minds Since 2019</h3>
          <p>
            Borigam coaching institution is known for its exceptional coaching
            methods. At Borigam, we are committed to nurturing the creative
            potential of every student. Our main motto is to sculpture the
            creative minds by providing high-quality education and expert
            guidance to excel in design and architecture entrance exams like
            NIFT, NID, NATA, B.ARCH, UCEED, and CEED.
          </p>

          <h3>Personalized Learning Experience</h3>
          <p>
            We understand that every student is unique. Our experienced faculty
            members are dedicated to ensure personalized attention through
            interactive classroom sessions and online courses to cater to the
            needs of different students. Our small batch sizes enable our
            faculty members to closely monitor the progress of each student and
            provide individualized guidance and support as needed.
          </p>

          <h3>Detailed Study Material</h3>
          <p>
            Our students benefit from exceptional coaching methods using
            extensive study material that covers all the important topics and
            concepts required for design and architecture entrance exams. Our
            study material is regularly updated to ensure it aligns with the
            latest exam patterns and syllabus. We also provide practice
            worksheets for each subject. Workshops with guest faculties further
            enhance their knowledge and offer real-world insights.
          </p>

          <h3>Mastering with Mock Tests</h3>
          <p>
            To build confidence and sharpen exam skills, we conduct weekly mock
            tests and final exam replica tests that simulate the real exam
            experience. Our continuous evaluation process ensures that students
            identify their strengths and work on areas that need improvement.
            For added convenience, mock tests are also accessible online through
            our dedicated mobile app, allowing students to practice anytime,
            anywhere. With Borigam’s thorough test series, students gain the
            confidence and competence needed.
          </p>

          <h3>Proven Track of Success Record</h3>
          <p>
            Borigam takes pride in its proven success record, with many of our
            students consistently achieving top ranks in design and architecture
            entrance exams. Our extensive coaching program, experienced faculty,
            portfolio design classes, step-by-step guidance, and personalized
            attention have helped numerous students realize their dreams of
            getting admission into prestigious fashion, design, and architecture
            colleges. Join us and be a part of our success story!
          </p>
        </div>

        {/* Right Column - Latest News */}
        <aside
          style={{
            flex: 1,
            backgroundColor: "#f9f9f9",
            borderLeft: "4px solid orange",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <div>
            <h2
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "10px",
                borderRadius: "4px 4px 0 0",
                marginBottom: "20px",
              }}
            >
              LATEST NEWS
            </h2>
            <ul
              style={{ listStyleType: "none", padding: 0, lineHeight: "1.8em" }}
            >
              <li>
                <strong>
                  New Batches For NIFT, NID, U/CEED - 2025-26 Entrance Coaching.
                  Batches Starting
                </strong>
                <br />
                <small>BY TAKSHSHILA | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>
                  New Batches For NATA & JEE Architecture - 2025 Is Starting
                  From 26th & 27th April
                </strong>
                <br />
                <small>BY TAKSHSHILA | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>
                  NIFT | NID Situation Test - 2025 Batch Starts From 26th & 27th
                  April, 25
                </strong>
                <br />
                <small>BY TAKSHSHILA | 21 APR, 2025</small>
              </li>
              <hr />
              <li>
                <strong>NATA 2025 Examination Dates Are Announced</strong>
                <br />
                <small>BY TAKSHSHILA | 08 FEB, 2025</small>
              </li>
            </ul>
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <a
                href="#"
                style={{
                  color: "orange",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                BROWSE ALL &raquo;
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default AboutPage;
