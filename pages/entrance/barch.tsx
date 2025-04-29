import React from 'react';
import Layout from '../../components/Layout';

const BArchPage = () => {
  return (
    <Layout>
      <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">B.ARCH ENTRANCE EXAM</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. About B.Arch Course</h2>
        <ul className="list-disc pl-6">
          <li>Duration: 5 Years</li>
          <li>Course Type: Undergraduate Professional Degree</li>
          <li>Objective: To train students in architectural design, structural engineering, building construction, and sustainable design.</li>
          <li>Career Scope: Licensed architects, urban planners, interior designers, landscape architects, or pursue higher studies.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Popular B.Arch Entrance Exams in India</h2>
        <ul className="list-disc pl-6">
          <li>NATA – Conducted by the Council of Architecture (CoA)</li>
          <li>JEE Main Paper 2 – Conducted by the National Testing Agency (NTA)</li>
          <li>State-Level Exams:
            <ul className="list-disc pl-6">
              <li>KEAM (Kerala)</li>
              <li>TANCET (Tamil Nadu)</li>
              <li>UPSEE (Uttar Pradesh)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Eligibility Criteria for B.Arch</h2>
        <ul className="list-disc pl-6">
          <li>10+2 with Physics, Chemistry, and Mathematics as compulsory subjects</li>
          <li>Minimum 50% aggregate in PCM and overall (For NATA)</li>
          <li>60% aggregate for IITs (through JEE Advanced)</li>
          <li>Diploma in Architecture (3 Years) holders are also eligible</li>
          <li>No age limit for most exams</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">4. B.Arch Entrance Exam Structure</h2>
        <h3 className="text-xl font-semibold mt-2">A. NATA</h3>
        <ul className="list-disc pl-6">
          <li>Mode: Computer-Based and Offline Drawing Test</li>
          <li>Duration: 3 Hours</li>
          <li>Total Marks: 200</li>
          <li>Sections: Cognitive and Drawing, Mathematics, General Aptitude</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">B. JEE Main Paper 2</h3>
        <ul className="list-disc pl-6">
          <li>Mode: Computer-Based and Offline Drawing Test</li>
          <li>Duration: 3 Hours</li>
          <li>Total Marks: 400</li>
          <li>Sections: Mathematics – 100, Aptitude – 200, Drawing – 100</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">5. Syllabus for B.Arch Entrance Exams</h2>
        <h3 className="text-xl font-semibold mt-2">Mathematics</h3>
        <ul className="list-disc pl-6">
          <li>Algebra, Trigonometry, Calculus</li>
          <li>Geometry and Coordinate Geometry</li>
          <li>Probability and Statistics</li>
          <li>Matrices and Determinants</li>
          <li>3D Geometry and Vectors</li>
        </ul>
        <h3 className="text-xl font-semibold mt-2">Aptitude</h3>
        <ul className="list-disc pl-6">
          <li>Visualizing 3D Objects</li>
          <li>Mental Ability, Logical Reasoning</li>
          <li>Architecture GK</li>
          <li>Spatial Reasoning</li>
          <li>Pictorial Composition</li>
        </ul>
        <h3 className="text-xl font-semibold mt-2">Drawing</h3>
        <ul className="list-disc pl-6">
          <li>Sketching and Drawing</li>
          <li>Perspective and Geometric Drawing</li>
          <li>Freehand and Memory Sketching</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">6. Application Process</h2>
        <ol className="list-decimal pl-6">
          <li>Visit official exam websites</li>
          <li>Register with valid credentials</li>
          <li>Fill and submit application form</li>
          <li>Upload necessary documents</li>
          <li>Pay application fee</li>
          <li>Download admit card</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">7. Important Dates (Tentative)</h2>
        <ul className="list-disc pl-6">
          <li>NATA Application: March</li>
          <li>NATA Exam: April–July</li>
          <li>JEE Main Application: December</li>
          <li>JEE Main Exam: January and April</li>
          <li>Results: Within a month after exams</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">8. B.Arch Exam Preparation Tips</h2>
        <ul className="list-disc pl-6">
          <li>Enhance Drawing Skills</li>
          <li>Focus on Mathematics</li>
          <li>Improve Observation</li>
          <li>Stay Updated on Architecture</li>
          <li>Time Management</li>
          <li>Attempt Mock Tests</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">9. Admission Process</h2>
        <ul className="list-disc pl-6">
          <li>Shortlisting based on exam scores</li>
          <li>Counseling by authorities</li>
          <li>Seat allocation by rank and preference</li>
        </ul>
        <p className="mt-2 font-medium">Top Colleges:</p>
        <ul className="list-disc pl-6">
          <li>IITs</li>
          <li>NITs</li>
          <li>SPA</li>
          <li>Private and State Architecture Colleges</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">10. Career Opportunities After B.Arch</h2>
        <ul className="list-disc pl-6">
          <li>Architect</li>
          <li>Urban Planner</li>
          <li>Interior Designer</li>
          <li>Landscape Architect</li>
          <li>Project Manager</li>
          <li>Sustainability Consultant</li>
        </ul>
        <p className="mt-2">Graduates can also pursue higher education in Urban Design, Sustainable Architecture, or Construction Management.</p>
      </section>
    </div>
    </Layout>
  );
};

export default BArchPage;