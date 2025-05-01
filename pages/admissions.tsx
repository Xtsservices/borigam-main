import React from "react";
import { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";

const Admissions = () => {
  const router = useRouter();

  return (
    <div className="container">
      {/* Back Button (works on mobile and web) */}
      <button className="back-button" onClick={() => router.push("/")}>
        <LeftOutlined style={{ marginRight: "6px" }} />
        Back
      </button>

      <div className="form-box">
        <h2>Admission Form</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
          />

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required />

          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            required
            placeholder="Enter desired course"
          />

          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows={3}
            required
            placeholder="Enter your address"
          ></textarea>

          <button type="submit">Submit Admission</button>
        </form>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to right, #f0f9ff, #e0e7ff);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .back-button {
          position: fixed;
          top: 16px;
          left: 16px;
          background: white;
          border: 1px solid #d1d5db;
          padding: 6px 12px;
          border-radius: 999px;
          color: #1e3a8a;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .back-button:hover {
          background: #f0f9ff;
          color: #1d4ed8;
          border-color: #93c5fd;
        }

        .form-box {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 500px;
          margin-top: 2rem;
        }

        h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1e3a8a;
        }
        @media (max-width: 480px) {
  .form-box {
    padding: 1.5rem;
    margin-top: 3rem;
  }

  .back-button {
    top: 12px;
    left: 12px;
    font-size: 13px;
    padding: 5px 10px;
  }
}


        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          font-weight: 500;
          margin-bottom: 0.25rem;
          color: #374151;
        }

        input,
        select,
        textarea {
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
          width: 100%;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #60a5fa;
          box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.3);
        }

        button[type="submit"] {
          background-color: #2563eb;
          color: white;
          font-weight: 600;
          padding: 0.75rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button[type="submit"]:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
};

export default Admissions;
