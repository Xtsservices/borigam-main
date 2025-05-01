import React from 'react';
import { useRouter } from 'next/router';
import { LeftOutlined } from '@ant-design/icons';

const BorigamPortal = () => {
  const router = useRouter();

  return (
    <div className="container">
      {/* Back Button at Top-Left Corner for Web & Mobile */}
      <button className="back-button" onClick={() => router.push('/')}>
        <LeftOutlined style={{ marginRight: '6px' }} />
        Back
      </button>

      <div className="form-wrapper">
        <h2>Borigam Portal Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, #dbeafe, #e9d5ff);
          padding: 1rem;
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

        .form-wrapper {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
        }

        h2 {
          text-align: center;
          color: orange;
          margin-bottom: 1.5rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          font-weight: 500;
          color: #374151;
        }

        input {
          padding: 0.5rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: 0.2s ease;
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.4);
        }

        button[type='submit'] {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem;
          font-weight: 600;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button[type='submit']:hover {
          background-color: #1e40af;
        }

        @media (max-width: 480px) {
          .form-wrapper {
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
      `}</style>
    </div>
  );
};

export default BorigamPortal;
