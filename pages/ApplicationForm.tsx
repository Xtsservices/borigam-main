import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";

const AdmissionForm: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    candidatePicture: null,
  });

  const handleFileUpload = (field: string, file: File | null) => {
    if (file && file.size > 2 * 1024 * 1024) { // 2MB limit
      alert("File size must be less than 2MB");
      return;
    }
    setUploadedFiles((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      
      <Header />
      <FormContainer>
        <TopImage src="/images/Borigam_Header_ExtraHD (1).png" alt="Top Banner" style={{ marginBottom: "50px", marginTop: "-20px" }} />

      <FormGrid onSubmit={handleSubmit}>
        
        {/* Candidate Picture */}
        <FormField>
          <Label>Candidate Picture (JPG upto 2MB Only) *</Label>
          <Input
        type="file"
        accept="image/*"
        onChange={(e) => handleFileUpload("candidatePicture", e.target.files?.[0] || null)}
          />
        </FormField>

        <FormField>
          <Label>You want to join Borigam for *</Label>
          <Select required>
        <option value="">CLASSROOM COACHING</option>
        <option value="online">Online Coaching</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Programme Interested For *</Label>
          <Select required>
        <option value="">DESIGN EXAMS</option>
        <option value="engineering">Engineering</option>
        <option value="medical">Medical</option>
          </Select>
        </FormField>

        <FormField>
          <Label>I Plan to enrol for following course *</Label>
          <Select required>
        <option value="">NOTHING SELECTED</option>
        <option value="longterm">Long Term</option>
        <option value="shortterm">Short Term</option>
          </Select>
        </FormField>

        <FormField>
          <Label>For other Courses, Please mention below *</Label>
          <Input type="text" placeholder="Other Courses" required />
        </FormField>

        <FormField>
          <Label>Candidate Name *</Label>
          <Input type="text" placeholder="Candidate Name" required />
        </FormField>

        <FormField>
          <Label>Father’s / Guardian’s Name *</Label>
          <Input type="text" placeholder="Father’s / Guardian’s Name" required />
        </FormField>

        <FormField>
          <Label>Mobile Number *</Label>
          <Input type="tel" placeholder="Mobile Number" required />
        </FormField>

        <FormField>
          <Label>Alternative Number *</Label>
          <Input type="tel" placeholder="Alt Number" required />
        </FormField>

        <FormField>
          <Label>E-Mail ID *</Label>
          <Input type="email" placeholder="E-Mail ID" required />
        </FormField>

        <FormField>
          <Label>School / College *</Label>
          <Input type="text" placeholder="School / College Name" required />
        </FormField>

        <FormField>
          <Label>DOB *</Label>
          <Input type="date" required />
        </FormField>

        <FormField>
          <Label>Qualification *</Label>
          <Input type="text" placeholder="Qualification" required />
        </FormField>

        <FormField>
          <Label>Scholarship Test *</Label>
          <Select required>
        <option value="">Yes / No</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
          </Select>
        </FormField>

        <FormField style={{ gridColumn: "1 / -1" }}>
          <Label>Address *</Label>
          <Textarea placeholder="Address" required />
        </FormField>

        <FormField>
          <Label>I Came to know about Borigam from *</Label>
          <Select required>
        <option value="">NOTHING SELECTED</option>
        <option value="friends">Friends</option>
        <option value="socialMedia">Social Media</option>
        <option value="advertisement">Advertisement</option>
          </Select>
        </FormField>

        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </FormGrid>
        </FormContainer>
    </>
  );
};

export default AdmissionForm;

// ------------------- Styled Components -------------------
const TopImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    max-height: 200px;
  }
  
  @media (max-width: 480px) {
    max-height: 150px;
  }
`;

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 200px auto;
  padding: 20px 20px 20px 20px; /* Reduced top padding since image is above header */
  
  /* Add subtle primary color accent */
  border-top: 4px solid #FF4E18;
  box-shadow: 0 0 20px rgba(255, 78, 24, 0.1);
  border-radius: 8px;
  background: white;
  
  /* Responsive margin adjustments */
  @media (max-width: 768px) {
    margin: 120px auto 20px auto;
  }
  
  @media (max-width: 480px) {
    margin: 80px auto 20px auto;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #FF4E18; /* Primary color */
  font-weight: 600;
`;

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;
  align-items: start;
  
  /* Responsive design */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #000; /* Black color */
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #a0a0a0ff; /* Primary color border */
  border-radius: 4px;
  font-size: 14px;
  color: #000; /* Black color */
  
  &:focus {
    outline: none;
    border-color: #E63E10; /* Darker shade on focus */
    box-shadow: 0 0 0 2px rgba(255, 78, 24, 0.2);
  }
  
  &::placeholder {
    color: #666; /* Darker placeholder for better readability */
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 2px solid #a0a0a0ff; /* Primary color border */
  border-radius: 4px;
  font-size: 14px;
  color: #000; /* Black color */
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #E63E10; /* Darker shade on focus */
    box-shadow: 0 0 0 2px rgba(255, 78, 24, 0.2);
  }
  
  option {
    color: #000; /* Black color for options */
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 2px solid #a0a0a0ff; /* Primary color border */
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  min-height: 60px;
  color: #000; /* Black color */
  
  &:focus {
    outline: none;
    border-color: #E63E10; /* Darker shade on focus */
    box-shadow: 0 0 0 2px rgba(255, 78, 24, 0.2);
  }
  
  &::placeholder {
    color: #666; /* Darker placeholder for better readability */
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background: #FF4E18; /* Primary color background */
  border: 2px solid #FF4E18;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #E63E10; /* Darker shade on hover */
    border-color: #E63E10;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 78, 24, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(255, 78, 24, 0.3);
  }
`;
