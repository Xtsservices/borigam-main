import React from "react";
import Layout from "../../components/Layout";

const ceedpage = () => {
  return (
    <Layout>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CEED Entrance Exam Content</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. About CEED</h2>
        <ul className="list-disc list-inside">
          <li>Full Form: Common Entrance Exam for Design</li>
          <li>Conducting Body: IIT Bombay</li>
          <li>Courses Offered:
            <ul className="list-disc list-inside ml-4">
              <li>Master of Design (M.Des)</li>
              <li>Ph.D. in Design</li>
            </ul>
          </li>
          <li>Mode of Exam: Computer-Based Test (CBT) and Offline Drawing Test</li>
          <li>Frequency: Conducted once a year</li>
          <li>Score Validity: 1 Year</li>
          <li>Participating Institutes:
            <ul className="list-disc list-inside ml-4">
              <li>IIT Bombay</li>
              <li>IIT Delhi</li>
              <li>IIT Guwahati</li>
              <li>IIT Hyderabad</li>
              <li>IIT Kanpur</li>
              <li>IIT Roorkee</li>
              <li>IIITDM Jabalpur</li>
              <li>Other design institutes</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Why Appear for CEED?</h2>
        <ul className="list-disc list-inside">
          <li>Prestigious Institutes: Admission to top IITs and other reputed design institutes.</li>
          <li>Career in Design: Opens up various design career opportunities in product design, visual communication, UI/UX design, and more.</li>
          <li>Skill Assessment: Tests both analytical thinking and design abilities.</li>
          <li>Ph.D. in Design: For candidates seeking research and academic careers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Eligibility Criteria for CEED</h2>
        <ul className="list-disc list-inside">
          <li>Educational Qualification:
            <ul className="list-disc list-inside ml-4">
              <li>Bachelor’s degree in Design, Engineering, Architecture, or Fine Arts.</li>
              <li>Final year students can also apply.</li>
            </ul>
          </li>
          <li>No upper age limit.</li>
          <li>No restriction on number of attempts.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. CEED Exam Pattern</h2>
        <p className="mb-2 font-medium">Part A – Computer-Based Test (1 Hour, 100 Marks)</p>
        <ul className="list-disc list-inside">
          <li>Objective Questions (NAT, MSQ, MCQ)</li>
          <li>Shortlisting candidates for Part B</li>
          <li>Sections:
            <ul className="list-disc list-inside ml-4">
              <li>Visualization and Spatial Ability</li>
              <li>Environmental and Social Awareness</li>
              <li>Analytical and Logical Reasoning</li>
              <li>Language and Creativity</li>
              <li>Design Thinking and Problem Solving</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4 mb-2 font-medium">Part B – Drawing Test (2 Hours, 100 Marks)</p>
        <ul className="list-disc list-inside">
          <li>Offline (Pen and Paper)</li>
          <li>Evaluate design, drawing, and problem-solving skills</li>
          <li>Tasks Include:
            <ul className="list-disc list-inside ml-4">
              <li>Sketching and Visual Representation</li>
              <li>Product Conceptualization</li>
              <li>Storytelling through Illustrations</li>
              <li>Problem Identification and Solution</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">Final Score Calculation: Part A - 25% Weightage, Part B - 75% Weightage</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. CEED Syllabus</h2>
        <p className="font-medium">Part A Syllabus</p>
        <ul className="list-disc list-inside ml-4">
          <li>Visualization and Spatial Ability</li>
          <li>Environmental and Social Awareness</li>
          <li>Analytical and Logical Reasoning</li>
          <li>Design and Creativity</li>
          <li>Language Skills</li>
        </ul>
        <p className="font-medium mt-4">Part B Syllabus</p>
        <ul className="list-disc list-inside ml-4">
          <li>Drawing Skills</li>
          <li>Creativity and Problem Solving</li>
          <li>Form and Material Understanding</li>
          <li>Storytelling</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Application Process for CEED</h2>
        <ol className="list-decimal list-inside">
          <li>Visit the Official Website: www.ceed.iitb.ac.in</li>
          <li>Register: Provide basic details to create an account</li>
          <li>Fill the Application Form: Enter academic, personal, and exam center preferences</li>
          <li>Upload Documents: Photograph, signature, certificates</li>
          <li>Pay Application Fee</li>
          <li>Download Admit Card</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Important Dates for CEED (Tentative)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Event</th>
                <th className="border px-6 py-3 text-left text-sm font-medium text-gray-700">Date (Tentative)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-white odd:bg-gray-50">
                <td className="border px-6 py-3">Application Start Date</td>
                <td className="border px-6 py-3">September 2024</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <td className="border px-6 py-3">Last Date to Apply</td>
                <td className="border px-6 py-3">October 2024</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <td className="border px-6 py-3">Admit Card Release</td>
                <td className="border px-6 py-3">January 2025</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <td className="border px-6 py-3">CEED Exam Date</td>
                <td className="border px-6 py-3">January 2025</td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <td className="border px-6 py-3">Result Declaration</td>
                <td className="border px-6 py-3">March 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. CEED Preparation Tips</h2>
        <ul className="list-disc list-inside">
          <li>Practice Drawing and Perspective Sketching</li>
          <li>Stay Updated on Design Trends and Architecture</li>
          <li>Develop Analytical Thinking and Spatial Skills</li>
          <li>Solve Past CEED Papers</li>
          <li>Improve Storytelling through Illustrations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Colleges Accepting CEED Scores</h2>
        <ul className="list-disc list-inside">
          <li>IIT Bombay</li>
          <li>IIT Delhi</li>
          <li>IIT Guwahati</li>
          <li>IIT Hyderabad</li>
          <li>IIT Kanpur</li>
          <li>IIT Roorkee</li>
          <li>IIITDM Jabalpur</li>
          <li>Other Design Institutes</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Career Opportunities After M.Des</h2>
        <ul className="list-disc list-inside">
          <li>Industrial Designer</li>
          <li>UI/UX Designer</li>
          <li>Product Designer</li>
          <li>Automotive Designer</li>
          <li>Graphic Designer</li>
          <li>Fashion Designer</li>
          <li>Packaging Designer</li>
          <li>Design Consultant</li>
        </ul>
        <p className="mt-2">Candidates can also pursue a Ph.D. in Design and specialize in fields like Sustainability in Design and AI in Design.</p>
      </section>
    </div>
    </Layout>
  );
};

export default ceedpage;
