import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

const NataPage = () => {
  return (
    <Layout>
      <Head>
        <title>NATA Entrance Exam - Complete Guide</title>
      </Head>

      <main>
        <h1>NATA Entrance Exam</h1>

        <Image 
          src="/images/nata-banner.jpg" 
          alt="NATA Overview" 
          width={800}
          height={300}
          priority
        />

        <section>
          <h2>1. About NATA</h2>
          <ul>
            <li>Full Form: National Aptitude Test in Architecture</li>
            <li>Conducting Body: Council of Architecture (CoA)</li>
            <li>Course Offered: Bachelor of Architecture (B.Arch)</li>
            <li>Mode of Exam: Computer-Based Test (CBT) and Offline Drawing Test</li>
            <li>Frequency: Conducted multiple times a year</li>
            <li>Score Validity: 1 Year</li>
          </ul>
          <p>NATA is accepted by most architecture colleges across India, except IITs, NITs, and SPAs which accept JEE Main Paper 2 scores.</p>
        </section>

        <section>
          <h2>2. Why Appear for NATA?</h2>
          <ul>
            <li>Provides entry to prestigious Architecture Colleges across India</li>
            <li>Tests both creative thinking and mathematical skills</li>
            <li>Flexibility to attempt the exam multiple times</li>
            <li>Opens pathways to a promising career in Architecture and Design</li>
          </ul>
        </section>

        <section>
          <h2>3. Eligibility Criteria for NATA</h2>
          <ul>
            <li>10+2 or equivalent with Mathematics as a compulsory subject</li>
            <li>Minimum 50% aggregate marks in PCM</li>
            <li>10+3 Diploma with Mathematics is also eligible</li>
            <li>No upper age limit</li>
          </ul>
        </section>

        <Image 
          src="/images/nata-banner.jpg" 
          alt="NATA Drawing Test" 
          width={800}
          height={300}
        />

        <section>
          <h2>4. NATA Exam Pattern</h2>
          <h3>Part A – Cognitive Skills Test (Aptitude)</h3>
          <ul>
            <li>Mode: Computer-Based Test</li>
            <li>Duration: 72 Minutes</li>
            <li>Marks: 125</li>
            <li>Subjects: General Aptitude, Logical Reasoning, Visual Perception, Architectural Awareness</li>
          </ul>
          <h3>Part B – Drawing and Visual Composition</h3>
          <ul>
            <li>Mode: Offline (Pen and Paper)</li>
            <li>Duration: 72 Minutes</li>
            <li>Marks: 75</li>
            <li>Tasks: Freehand Sketching, Perspective Drawing, Visual Composition, Conceptual Design</li>
          </ul>
          <p>Total Duration: 3 Hours | Total Marks: 200</p>
        </section>

        <section>
          <h2>5. NATA Syllabus</h2>
          <h3>Aptitude Test</h3>
          <ul>
            <li>Visual and Spatial Ability</li>
            <li>Logical and Analytical Reasoning</li>
            <li>Architectural Awareness</li>
            <li>General Knowledge Related to Architecture</li>
            <li>Mathematics – Algebra, Geometry, Trigonometry</li>
          </ul>
          <h3>Drawing Test</h3>
          <ul>
            <li>Sketching Objects and Scenes from Memory</li>
            <li>Perspective and Scale Drawing</li>
            <li>Composition using Shapes and Forms</li>
            <li>Understanding of Proportions and Aesthetics</li>
            <li>Visualizing 3D Objects from 2D Drawings</li>
          </ul>
        </section>

        <section>
          <h2>6. Application Process</h2>
          <ol>
            <li>Visit the official website: <a href="https://www.nata.in" target="_blank" rel="noopener noreferrer">www.nata.in</a></li>
            <li>Register and create an account</li>
            <li>Fill in academic and personal details</li>
            <li>Upload scanned documents</li>
            <li>Pay application fee online</li>
            <li>Download the admit card</li>
          </ol>
        </section>

        <section>
          <h2>7. NATA Exam Fees</h2>
          <table>
            <thead>
              <tr>
                <th>Attempt Type</th>
                <th>General</th>
                <th>SC/ST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single Attempt</td>
                <td>₹2,000</td>
                <td>₹1,500</td>
              </tr>
              <tr>
                <td>Double Attempt</td>
                <td>₹4,000</td>
                <td>₹3,000</td>
              </tr>
              <tr>
                <td>Triple Attempt</td>
                <td>₹5,500</td>
                <td>₹4,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>8. Important Dates (Tentative)</h2>
          <ul>
            <li>Application Start: March 2025</li>
            <li>Last Date to Apply: April 2025</li>
            <li>Admit Card Release: April 2025</li>
            <li>NATA Exam Dates: April – July 2025</li>
            <li>Results: Within 7 Days of Exam</li>
          </ul>
        </section>

        <section>
          <h2>9. NATA Preparation Tips</h2>
          <ul>
            <li>Improve Drawing Skills: Freehand, perspective, and composition</li>
            <li>Stay updated on architectural topics and famous buildings</li>
            <li>Practice math, logic, and aptitude regularly</li>
            <li>Use mock tests for time management</li>
            <li>Practice 3D visualization techniques</li>
            <li>Solve previous year papers</li>
          </ul>
        </section>

        <section>
          <h2>10. Top Colleges Accepting NATA Scores</h2>
          <ul>
            <li>School of Planning and Architecture (SPA), Delhi</li>
            <li>CEPT University, Ahmedabad</li>
            <li>Sir JJ College of Architecture, Mumbai</li>
            <li>JNAFAU, Hyderabad</li>
            <li>BIT Mesra, Ranchi</li>
            <li>Chandigarh College of Architecture</li>
          </ul>
        </section>

        <section>
          <h2>11. Career Opportunities After B.Arch</h2>
          <ul>
            <li>Architect</li>
            <li>Urban Planner</li>
            <li>Interior Designer</li>
            <li>Landscape Architect</li>
            <li>Sustainability Consultant</li>
            <li>Project Manager / Construction Manager</li>
            <li>3D Visualizer</li>
          </ul>
          <p>Graduates may pursue higher studies like M.Arch, Urban Design, or Landscape Architecture.</p>
        </section>
      </main>
    </Layout>
  );
};

export default NataPage;