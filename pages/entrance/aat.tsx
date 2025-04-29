import React from 'react';
import Layout from '../../components/Layout';

const AATpage = () => {
  return (
    <Layout>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AAT Entrance Exam Content</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. About AAT</h2>
        <ul className="list-disc list-inside">
          <li>Full Form: Architecture Aptitude Test</li>
          <li>Conducting Body: Joint Implementation Committee of JEE Advanced</li>
          <li>Courses Offered: Bachelor of Architecture (B.Arch)</li>
          <li>Mode of Exam: Offline (Pen and Paper)</li>
          <li>Frequency: Conducted once a year</li>
          <li>Duration: 3 Hours</li>
          <li>Eligibility: Only for JEE Advanced qualified candidates</li>
          <li>Participating Institutes:
            <ul className="list-disc list-inside ml-4">
              <li>IIT Roorkee</li>
              <li>IIT Kharagpur</li>
              <li>IIT Varanasi (BHU)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Why Appear for AAT?</h2>
        <ul className="list-disc list-inside">
          <li>Study at Premier Institutes: Get admission to top IITs offering B.Arch programs.</li>
          <li>Comprehensive Architectural Training: Gain in-depth knowledge of architectural design and construction techniques.</li>
          <li>Lucrative Career Options: Secure high-paying jobs in the architecture and construction sectors.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Eligibility Criteria for AAT</h2>
        <ul className="list-disc list-inside">
          <li>Candidates must qualify for the JEE Advanced examination.</li>
          <li>Only those who have secured a rank in JEE Advanced are eligible to apply for AAT.</li>
          <li>There is no separate registration for AAT; registration is done through the JEE Advanced portal.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. AAT Exam Pattern</h2>
        <ul className="list-disc list-inside">
          <li>Freehand Drawing: Draw and represent objects with accurate proportions.</li>
          <li>Geometrical Drawing: Assess understanding of geometry and visualizations.</li>
          <li>3D Perception: Visualize and draw 3D objects.</li>
          <li>Architectural Awareness: General knowledge of architecture and famous structures.</li>
          <li>Imagination and Creativity: Display creative problem-solving through design concepts.</li>
        </ul>
        <p className="mt-2">Total Duration: 3 Hours</p>
        <p>Total Marks: Not specified publicly</p>
        <p>Mode: Offline (Pen and Paper)</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. AAT Syllabus</h2>
        <ul className="list-disc list-inside">
          <li><strong>Freehand Drawing</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Simple objects like household items, furniture, or vehicles.</li>
              <li>Proportionate representation using shading and line work.</li>
              <li>Perspective drawings.</li>
            </ul>
          </li>
          <li><strong>Geometrical Drawing</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Understanding of 2D and 3D objects.</li>
              <li>Scale and proportion concepts.</li>
              <li>Geometric transformations and views.</li>
            </ul>
          </li>
          <li><strong>3D Perception and Visualization</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Visualizing three-dimensional objects.</li>
              <li>Creating mental imagery of structures.</li>
              <li>Drawing sectional views and perspectives.</li>
            </ul>
          </li>
          <li><strong>Imagination and Aesthetic Sensitivity</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Creative composition based on given themes.</li>
              <li>Design and visual storytelling using sketches.</li>
              <li>Sense of color composition and detailing.</li>
            </ul>
          </li>
          <li><strong>Architectural Awareness</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Knowledge of famous architectural works and monuments.</li>
              <li>Awareness of modern and ancient architectural styles.</li>
              <li>Understanding sustainable and green architecture.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Application Process for AAT</h2>
        <ol className="list-decimal list-inside">
          <li>Qualify JEE Advanced: Ensure you clear the JEE Advanced exam.</li>
          <li>Register for AAT: Log in to the JEE Advanced portal and register for AAT.</li>
          <li>Select Exam Center: Choose your preferred center (centers are usually at IIT campuses).</li>
          <li>Download Admit Card: The AAT admit card will be issued on the JEE Advanced portal.</li>
          <li>Appear for Exam: Attend the offline exam on the scheduled date.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Important Dates for AAT (Tentative)</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Event</th>
              <th className="border px-4 py-2">Date (Tentative)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">JEE Advanced Exam Date</td>
              <td className="border px-4 py-2">June 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">AAT Registration Opens</td>
              <td className="border px-4 py-2">June 2025 (After JEE Advanced Result)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">AAT Exam Date</td>
              <td className="border px-4 py-2">June 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Result Declaration</td>
              <td className="border px-4 py-2">June 2025 (Within a week)</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">Check the official website for the latest updates: <a className="text-blue-600 underline" href="https://jeeadv.ac.in" target="_blank" rel="noopener noreferrer">https://jeeadv.ac.in</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. AAT Preparation Tips</h2>
        <ul className="list-disc list-inside">
          <li>Enhance Drawing Skills: Practice freehand drawing and perspective sketching.</li>
          <li>Study Geometry: Improve your understanding of 2D and 3D shapes.</li>
          <li>Improve Visualization: Solve spatial reasoning puzzles and exercises.</li>
          <li>Know Architectural Landmarks: Read about famous architects, monuments, and architectural trends.</li>
          <li>Practice with Time Management: Take mock tests to improve speed and accuracy.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Institutes Offering B.Arch Through AAT</h2>
        <ul className="list-disc list-inside">
          <li>IIT Kharagpur</li>
          <li>IIT Roorkee</li>
          <li>IIT Varanasi (BHU)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Career Opportunities After B.Arch</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Career Role</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Architect</td>
              <td className="border px-4 py-2">Design buildings and spaces.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Urban Planner</td>
              <td className="border px-4 py-2">Plan and develop urban areas.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Interior Designer</td>
              <td className="border px-4 py-2">Design interior spaces and decor.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Landscape Architect</td>
              <td className="border px-4 py-2">Design outdoor environments.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sustainability Consultant</td>
              <td className="border px-4 py-2">Focus on eco-friendly architectural solutions.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Construction Project Manager</td>
              <td className="border px-4 py-2">Oversee building projects from start to finish.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Architectural Visualizer</td>
              <td className="border px-4 py-2">Create realistic 3D renderings of architectural designs.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">Further studies like Master of Architecture (M.Arch) or certifications in specialized fields like Urban Design or Heritage Conservation can broaden career prospects.</p>
      </section>
    </div>
    </Layout>
  );
};

export default AATpage;