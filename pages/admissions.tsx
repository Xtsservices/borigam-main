import React from "react";
import { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";
import Header from "@/components/Header";

const Admissions = () => {
  const router = useRouter();

  return (
    <>
    <Header />
    <div className="container">
      {/* Back Button */}
      <button className="back-button" onClick={() => router.push("/")}>
        <LeftOutlined style={{ marginRight: "6px" }} />
        Back
      </button>

      <div className="form-box">
        <h2>Admission Application Form</h2>
        <form>
          <div className="form-grid">
            {/* Row 1 */}
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                required
                placeholder="Enter your surname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                required
                placeholder="Enter student name"
              />
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                required
                placeholder="Enter father's name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherName">Mother's Name</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                required
                placeholder="Enter mother's name"
              />
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label htmlFor="fatherContact">Father's Contact</label>
              <input
                type="tel"
                id="fatherContact"
                name="fatherContact"
                required
                placeholder="Father's phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherContact">Mother's Contact</label>
              <input
                type="tel"
                id="motherContact"
                name="motherContact"
                required
                placeholder="Mother's phone number"
              />
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <label htmlFor="studentContact">Student's Contact</label>
              <input
                type="tel"
                id="studentContact"
                name="studentContact"
                required
                placeholder="Student's phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            {/* Row 5 */}
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                required
                placeholder="Enter age"
              />
            </div>

            {/* Row 6 */}
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="male" required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" /> Others
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="aadhar">Aadhar No.</label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                required
                placeholder="Enter Aadhar number"
              />
            </div>

            {/* Row 7 */}
            <div className="form-group span-2">
              <label htmlFor="presentAddress">Present Address</label>
              <textarea
                id="presentAddress"
                name="presentAddress"
                rows={2}
                required
                placeholder="Enter present address"
              ></textarea>
            </div>

            {/* Row 8 */}
            <div className="form-group">
              <label htmlFor="presentPincode">Pin Code</label>
              <input
                type="text"
                id="presentPincode"
                name="presentPincode"
                required
                placeholder="Enter pin code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                placeholder="Enter blood group"
              />
            </div>

            {/* Row 9 */}
            <div className="form-group span-2">
              <label htmlFor="permanentAddress">Permanent Address</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                rows={2}
                required
                placeholder="Enter permanent address"
              ></textarea>
            </div>

            {/* Row 10 */}
            <div className="form-group">
              <label htmlFor="permanentPincode">Pin Code</label>
              <input
                type="text"
                id="permanentPincode"
                name="permanentPincode"
                required
                placeholder="Enter pin code"
              />
            </div>
            <div className="form-group">
              <label htmlFor="schoolName">School/College Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                required
                placeholder="Enter school/college name"
              />
            </div>

            {/* Row 11 */}
            <div className="form-group span-2">
              <label>Current Class</label>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="class" value="9th" /> 9th Class
                </label>
                <label>
                  <input type="checkbox" name="class" value="10th" /> 10th Class
                </label>
                <label>
                  <input type="checkbox" name="class" value="11th" /> 11th Class
                </label>
                <label>
                  <input type="checkbox" name="class" value="12th" /> 12th Class
                </label>
                <label>
                  <input type="checkbox" name="class" value="completed12th" /> Completed 12th
                </label>
              </div>
            </div>

            {/* Row 12 */}
            <div className="form-group span-2">
              <label>Choose The Course</label>
              <div className="checkbox-grid">
                <label>
                  <input type="checkbox" name="course" value="NIFT" /> NIFT
                </label>
                <label>
                  <input type="checkbox" name="course" value="NID" /> NID
                </label>
                <label>
                  <input type="checkbox" name="course" value="UCEED" /> UCEED
                </label>
                <label>
                  <input type="checkbox" name="course" value="CEED" /> CEED
                </label>
                <label>
                  <input type="checkbox" name="course" value="B.ARCH" /> B. ARCH
                </label>
                <label>
                  <input type="checkbox" name="course" value="NATA" /> NATA
                </label>
                <label>
                  <input type="checkbox" name="course" value="BFA" /> BFA
                </label>
                <label>
                  <input type="checkbox" name="course" value="AAT" /> AAT
                </label>
                <label>
                  <input type="checkbox" name="course" value="FDDI" /> FDDI
                </label>
              </div>
            </div>

            {/* Row 13 */}
            <div className="form-group span-2">
              <label>Course Duration</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="duration" value="longTerm" required /> Long Term
                </label>
                <label>
                  <input type="radio" name="duration" value="shortTerm" /> Short Term
                </label>
                <label>
                  <input type="radio" name="duration" value="crashCourse" /> Crash Course
                </label>
                <label>
                  <input type="radio" name="duration" value="foundation" /> Foundation Course
                </label>
              </div>
            </div>

            {/* Row 14 */}
            <div className="form-group span-2">
              <label>How Do You Approach BORIGAM</label>
              <div className="checkbox-grid">
                <label>
                  <input type="checkbox" name="approach" value="instagram" /> Instagram
                </label>
                <label>
                  <input type="checkbox" name="approach" value="facebook" /> Facebook
                </label>
                <label>
                  <input type="checkbox" name="approach" value="website" /> Website
                </label>
                <label>
                  <input type="checkbox" name="approach" value="friends" /> Friends
                </label>
                <label>
                  <input type="checkbox" name="approach" value="family" /> Family
                </label>
                <label>
                  <input type="checkbox" name="approach" value="newspaper" /> Newspaper
                </label>
              </div>
            </div>

            {/* Row 15 */}
            <div className="form-group">
              <label>Student's Signature</label>
              <div className="signature-line"></div>
            </div>
            <div className="form-group">
              <label>Parent's Signature</label>
              <div className="signature-line"></div>
            </div>

            {/* Row 16 */}
            <div className="form-group span-2">
              <label htmlFor="photo">Photo Upload</label>
              <input 
                type="file" 
                id="photo" 
                name="photo" 
                accept="image/*" 
                className="file-input"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      `}</style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          font-family: 'Poppins', sans-serif;
        }

        .back-button {
          position: fixed;
          top: 24px;
          left: 24px;
          background: white;
          border: 1px solid #e0e0e0;
          padding: 10px 18px;
          border-radius: 30px;
          color: #4a6bff;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
        }

        .back-button:hover {
          background: #f0f4ff;
          color: #3a5bef;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .form-box {
        
          background: white;
          padding: 2.5rem;
          border-radius: 18px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 920px;
          margin: 2rem 0;
        }

        h2 {
          text-align: center;
          margin-bottom: 2rem;
          color:  #ff4500;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-group {
          margin-bottom: 0.75rem;
        }

        .span-2 {
          grid-column: span 2;
        }

        label {
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #4a5568;
          display: block;
          font-size: 0.95rem;
        }

        input,
        textarea,
        select {
          padding: 0.85rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.95rem;
          width: 100%;
          background: #f8fafc;
          transition: all 0.25s ease;
          font-family: 'Poppins', sans-serif;
        }

        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: #4a6bff;
          box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.15);
          background: white;
        }

        textarea {
          resize: vertical;
          min-height: 80px;
        }

        .radio-group,
        .checkbox-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .radio-group label,
        .checkbox-group label,
        .checkbox-grid label {
          font-weight: 400;
          display: flex;
          align-items: center;
          color: #4a5568;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .radio-group label:hover,
        .checkbox-group label:hover,
        .checkbox-grid label:hover {
          color: #4a6bff;
        }

        input[type="checkbox"],
        input[type="radio"] {
          width: auto;
          margin-right: 0.5rem;
          accent-color: #4a6bff;
        }

        .signature-line {
          height: 2px;
          background: #e2e8f0;
          margin-top: 1.5rem;
          width: 100%;
          background: repeating-linear-gradient(to right, #e2e8f0 0%, #e2e8f0 50%, transparent 50%, transparent 100%);
          background-size: 20px 2px;
          background-repeat: repeat-x;
        }

        .file-input {
          width: 100%;
          padding: 1rem;
          border: 2px dashed #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .file-input:hover {
          border-color: #4a6bff;
          background: #f0f4ff;
        }

        .submit-btn {
          background: #ff4500;
          color: white;
          font-weight: 600;
          padding: 1.1rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          margin-top: 1.5rem;
          width: 100%;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(74, 107, 255, 0.25);
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
        }

        .submit-btn:hover {
          background: #3a5bef;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(74, 107, 255, 0.3);
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .span-2 {
            grid-column: span 1;
          }
          
          .checkbox-grid {
            grid-template-columns: 1fr 1fr;
          }

          .form-box {
            padding: 1.75rem;
          }

          h2 {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .form-box {
            padding: 1.5rem;
          }
          
          .checkbox-grid {
            grid-template-columns: 1fr;
          }

          .back-button {
            top: 16px;
            left: 16px;
            padding: 8px 14px;
            font-size: 14px;
          }

          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Admissions;