import React from 'react';
import Layout from '../../components/Layout';

const niftpage = () => {
  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">NIFT Entrance Exam Overview</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. About NIFT</h2>
        <p>
          The National Institute of Fashion Technology (NIFT) is one of India’s premier institutions for fashion, design,
          technology, and management. Established in 1986 under the Ministry of Textiles, Government of India, it has 18
          campuses across India with headquarters in New Delhi. The institute offers programs in design, fashion
          technology, and fashion management.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Courses Offered at NIFT</h2>
        <h3 className="font-semibold">Undergraduate (Bachelor's) Programs</h3>
        <ul className="list-disc list-inside ml-4">
          <li>B.Des (Bachelor of Design) – 4 years
            <ul className="list-disc list-inside ml-6">
              <li>Fashion Design</li>
              <li>Leather Design</li>
              <li>Accessory Design</li>
              <li>Textile Design</li>
              <li>Knitwear Design</li>
              <li>Fashion Communication</li>
            </ul>
          </li>
          <li>B.FTech (Bachelor of Fashion Technology) – 4 years
            <ul className="list-disc list-inside ml-6">
              <li>Apparel Production</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-semibold mt-4">Postgraduate (Master's) Programs</h3>
        <ul className="list-disc list-inside ml-4">
          <li>M.Des (Master of Design) – 2 years</li>
          <li>M.FTech (Master of Fashion Technology) – 2 years</li>
          <li>MFM (Master of Fashion Management) – 2 years</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Eligibility Criteria</h2>
        <h3 className="font-semibold">For B.Des and B.FTech</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Must have passed Class 12 (10+2) from a recognized board.</li>
          <li>B.Des: Any stream (Science/Commerce/Arts).</li>
          <li>B.FTech: Must have studied Physics, Chemistry, and Mathematics.</li>
          <li>Upper age limit: 24 years (5 years relaxation for SC/ST/PwD).</li>
        </ul>
        <h3 className="font-semibold mt-2">For M.Des, M.FTech, and MFM</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Relevant undergraduate degree from a recognized university.</li>
          <li>No age limit.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. NIFT Entrance Exam Structure</h2>
        <h3 className="font-semibold">For B.Des Applicants</h3>
        <ul className="list-disc list-inside ml-4">
          <li>General Ability Test (GAT)</li>
          <li>Creative Ability Test (CAT)</li>
          <li>Situation Test</li>
        </ul>
        <h3 className="font-semibold">For B.FTech Applicants</h3>
        <p>Only General Ability Test (GAT).</p>
        <h3 className="font-semibold">For M.Des Applicants</h3>
        <ul className="list-disc list-inside ml-4">
          <li>GAT</li>
          <li>CAT</li>
          <li>Group Discussion (GD) & Personal Interview (PI)</li>
        </ul>
        <h3 className="font-semibold">For M.FTech & MFM Applicants</h3>
        <p>GAT + GD & PI</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Exam Pattern & Syllabus</h2>
        <h3 className="font-semibold">General Ability Test (GAT)</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Quantitative Ability (Class 10 Math)</li>
          <li>Communication Ability & English Comprehension</li>
          <li>Analytical & Logical Ability</li>
          <li>General Knowledge & Current Affairs</li>
        </ul>
        <h3 className="font-semibold">Creative Ability Test (CAT)</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Drawing skills</li>
          <li>Creativity & innovation</li>
          <li>Visual perception</li>
          <li>Observation & imagination</li>
        </ul>
        <h3 className="font-semibold">Situation Test – For B.Des</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Create a 3D model from provided materials based on a theme (2 hours).</li>
          <li>Write-up explaining the concept and process.</li>
        </ul>
        <p className="mt-2 font-semibold">Evaluation Criteria</p>
        <ul className="list-disc list-inside ml-4">
          <li>Creativity and Innovation</li>
          <li>Aesthetic Appeal and Presentation</li>
          <li>Material Utilization</li>
          <li>Conceptual Clarity</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Important Dates (Tentative)</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Application Start: November</li>
          <li>Deadline: December</li>
          <li>Admit Card Release: January</li>
          <li>Exam Date: February</li>
          <li>Results: March/April</li>
          <li>Situation Test: April/May</li>
          <li>Counselling: May/June</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. How to Apply</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Visit <a href="https://www.nift.ac.in" className="text-blue-600 underline" target="_blank">nift.ac.in</a> and register</li>
          <li>Upload documents: photo, signature, certificates</li>
          <li>Pay application fee online</li>
          <li>Download admit card in January</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Exam Preparation Tips</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Practice sketching and drawing regularly</li>
          <li>Stay updated with general knowledge and current affairs</li>
          <li>Solve previous years’ papers and mock tests</li>
          <li>Focus on time management and problem-solving skills</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Admission & Counselling</h2>
        <p>
          Shortlisted candidates proceed to Situation Test / GD & PI. Final selection is based on combined scores from all tests.
          Qualified candidates attend counselling and seat allotment based on their rank and course preferences.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Career Opportunities After NIFT</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Fashion Designer</li>
          <li>Textile Designer</li>
          <li>Accessory Designer</li>
          <li>Fashion Stylist</li>
          <li>Fashion Entrepreneur</li>
          <li>Fashion Merchandiser</li>
          <li>Apparel Production Manager</li>
        </ul>
      </section>
    </div>



        

    </Layout>
  );
};

export default niftpage;