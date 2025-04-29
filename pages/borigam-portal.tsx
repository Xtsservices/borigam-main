import React from 'react';
import Header from '../components/Header';
import AppFooter from '../components/Footer';
import { Card, Row, Col } from 'antd';


const BorigamPortal = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h2>Borigam Portal Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, #dbeafe, #e9d5ff);
          padding: 1rem;
        }

        .form-wrapper {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

        button {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem;
          font-weight: 600;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
};

export default BorigamPortal;
