import React, { useState } from 'react';
import Header from '@/components/Header';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Form Data Interface
interface ApplicationForm {
  // Personal Details
  studentName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  aadhaarNo: string;
  aadhaarAddress: string;
  city: string;
  pinCode: string;
  state: string;
  studentMobile: string;
  email: string;

  // Educational Qualification
  board: string;
  marks: number;
  cgpa: number;

  // Intermediate/College Details
  interCollegeName: string;
  course: string;
  interMarks: number;
  interCgpa: number;
  collegeAddress: string;
  collegeCity: string;
  collegePinCode: string;
  collegeState: string;

  // Parent/Guardian Details
  fatherName: string;
  fatherMobile: string;
  motherName: string;
  motherMobile: string;

  // Address
  presentAddress: string;

  // Course Selection
  courseSelection: string[];

  // Course Duration
  courseDuration: string[];

  // Source of Information
  sourceOfInfo: string[];
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem 0;
  margin-top: 120px;
`;

const FormWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff4e18;
  margin: 0;
`;

const ApplicationNumber = styled.p`
  color: #6b7280;
  margin: 0.5rem 0 0 0;
  font-size: 0.875rem;
  
  span {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: 500;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  color: #ff4e18;
  border-bottom: 1px solid #ff4e18;
  padding-bottom: 0.5rem;
  margin: 0;
  font-weight: 500;
`;

const Grid = styled.div<{ cols?: number }>`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => props.cols || 2}, minmax(0, 1fr));
  }
`;

const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#ff4e18'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: #f9fafb;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #ff4e18;
    box-shadow: 0 0 0 3px rgba(255, 78, 24, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const Textarea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#ff4e18'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: #f9fafb;
  resize: vertical;
  min-height: 3rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #ff4e18;
    box-shadow: 0 0 0 3px rgba(255, 78, 24, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const Select = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : '#ff4e18'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: #f9fafb;
  cursor: pointer;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    border-color: #ff4e18;
    box-shadow: 0 0 0 3px rgba(255, 78, 24, 0.1);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const RadioLabel = styled.label`
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
`;

const CheckboxGrid = styled.div<{ cols?: number }>`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 0.75rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => props.cols || 2}, minmax(0, 1fr));
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxInput = styled.input`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin: 0;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin: 1rem 0;
`;

const SubmitButton = styled.button`
  align-self: center;
  padding: 0.75rem 3rem;
  
  border: 1px solid #ff4e18;
  color: #ff4e18;

  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  
  &:hover {
    background-color: #ff4e18;
     color: #ffffff;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(31, 41, 55, 0.1);
  }
`;

// Constants
const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

const courseOptions = [
  { id: "nid-ug", label: "NID / UG Program" },
  { id: "nid-pg", label: "NID / PG Program" },
  { id: "nift-ug", label: "NIFT / UG Program" },
  { id: "nift-pg", label: "NIFT / PG Program" },
  { id: "b-arch", label: "B.ARCH" },
  { id: "uceed", label: "UCEED" },
  { id: "ceed", label: "CEED" },
  { id: "fddi", label: "FDDI" },
  { id: "bfa", label: "BFA" },
  { id: "nata", label: "NATA" },
  { id: "portfolio", label: "Portfolio for Indian / Foreign University" }
];

const durationOptions = [
  { id: "foundation", label: "Foundation Batch (10th & 11th)" },
  { id: "long-term", label: "Long Term" },
  { id: "short-term", label: "Short Term" },
  { id: "crash-course", label: "Crash Course" }
];

const sourceOptions = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "friends", label: "Friends" },
  { id: "family", label: "Family" },
  { id: "newspaper", label: "Newspaper" },
  { id: "website", label: "Website" }
];

// Main Component
const BorigamApplicationForm: React.FC = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<ApplicationForm>();
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File | null }>({
    aadhaarCard: null,
    studentPhoto: null,
    studentSignature: null,
    parentSignature: null
  });

  const applicationNo = `APP${Date.now().toString().slice(-8)}`;

  // Watch for checkbox arrays
  const courseSelection = watch("courseSelection") || [];
  const courseDuration = watch("courseDuration") || [];
  const sourceOfInfo = watch("sourceOfInfo") || [];

  const handleFileUpload = (field: string, file: File | null) => {
    if (file && file.size > 100 * 1024) {
      alert("File size must be less than 100KB");
      return;
    }
    setUploadedFiles(prev => ({ ...prev, [field]: file }));
  };

  const handleCheckboxChange = (field: "courseSelection" | "courseDuration" | "sourceOfInfo", value: string, checked: boolean) => {
    const currentValues = watch(field) || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v: string) => v !== value);
    setValue(field, newValues);
  };

  const onSubmit = (data: ApplicationForm) => {
    console.log("Form Data:", data);
    console.log("Uploaded Files:", uploadedFiles);
    alert("Application submitted successfully!");
  };

  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <ApplicationNumber>
                Application No.: <span>{applicationNo}</span>
              </ApplicationNumber>
            </CardHeader>

            <CardContent>
              <Form onSubmit={handleSubmit(onSubmit)}>

                {/* Personal Details Section */}
                <Section>
                  <SectionTitle>👤 Personal Details</SectionTitle>

                  <Grid>
                    <FormField>
                      <Label htmlFor="studentName">Student Full Name *</Label>
                      <Input
                        id="studentName"
                        hasError={!!errors.studentName}
                        {...register("studentName", { required: "Student name is required" })}
                      />
                      {errors.studentName && <ErrorMessage>{errors.studentName.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        hasError={!!errors.dateOfBirth}
                        {...register("dateOfBirth", { required: "Date of birth is required" })}
                      />
                      {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label>Gender *</Label>
                      <RadioGroup>
                        <RadioItem>
                          <RadioInput
                            type="radio"
                            id="male"
                            value="male"
                            {...register("gender", { required: "Gender is required" })}
                          />
                          <RadioLabel htmlFor="male">Male</RadioLabel>
                        </RadioItem>
                        <RadioItem>
                          <RadioInput
                            type="radio"
                            id="female"
                            value="female"
                            {...register("gender", { required: "Gender is required" })}
                          />
                          <RadioLabel htmlFor="female">Female</RadioLabel>
                        </RadioItem>
                      </RadioGroup>
                      {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select
                        id="bloodGroup"
                        {...register("bloodGroup")}
                      >
                        <option value="">Select blood group</option>
                        {bloodGroups.map((group) => (
                          <option key={group} value={group}>{group}</option>
                        ))}
                      </Select>
                    </FormField>

                    <FormField>
                      <Label htmlFor="aadhaarNo">Student Aadhaar No. *</Label>
                      <Input
                        id="aadhaarNo"
                        hasError={!!errors.aadhaarNo}
                        maxLength={12}
                        {...register("aadhaarNo", {
                          required: "Aadhaar number is required",
                          pattern: { value: /^\d{12}$/, message: "Aadhaar number must be 12 digits" }
                        })}
                      />
                      {errors.aadhaarNo && <ErrorMessage>{errors.aadhaarNo.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="aadhaarCard">Aadhaar Card Image * (Max 100KB)</Label>
                      <Input
                        id="aadhaarCard"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("aadhaarCard", e.target.files?.[0] || null)}
                      />
                    </FormField>
                  </Grid>

                  <FormField>
                    <Label htmlFor="aadhaarAddress">Address as per Aadhaar *</Label>
                    <Textarea
                      id="aadhaarAddress"
                      hasError={!!errors.aadhaarAddress}
                      rows={3}
                      {...register("aadhaarAddress", { required: "Address is required" })}
                    />
                    {errors.aadhaarAddress && <ErrorMessage>{errors.aadhaarAddress.message}</ErrorMessage>}
                  </FormField>

                  <GridThree>
                    <FormField>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        hasError={!!errors.city}
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="pinCode">Pin Code *</Label>
                      <Input
                        id="pinCode"
                        hasError={!!errors.pinCode}
                        maxLength={6}
                        {...register("pinCode", {
                          required: "Pin code is required",
                          pattern: { value: /^\d{6}$/, message: "Pin code must be 6 digits" }
                        })}
                      />
                      {errors.pinCode && <ErrorMessage>{errors.pinCode.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="state">State *</Label>
                      <Select
                        id="state"
                        hasError={!!errors.state}
                        {...register("state", { required: "State is required" })}
                      >
                        <option value="">Select state</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Select>
                      {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
                    </FormField>
                  </GridThree>

                  <Grid>
                    <FormField>
                      <Label htmlFor="studentMobile">Student Mobile No. *</Label>
                      <Input
                        id="studentMobile"
                        type="tel"
                        hasError={!!errors.studentMobile}
                        maxLength={10}
                        {...register("studentMobile", {
                          required: "Mobile number is required",
                          pattern: { value: /^\d{10}$/, message: "Mobile number must be 10 digits" }
                        })}
                      />
                      {errors.studentMobile && <ErrorMessage>{errors.studentMobile.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        hasError={!!errors.email}
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                        })}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormField>
                  </Grid>
                </Section>

                <Separator />

                {/* Educational Qualification Section */}
                <Section>
                  <SectionTitle>📘 Educational Qualification</SectionTitle>

                  <GridThree>
                    <FormField>
                      <Label htmlFor="board">Board *</Label>
                      <Select
                        id="board"
                        hasError={!!errors.board}
                        {...register("board", { required: "Board is required" })}
                      >
                        <option value="">Select board</option>
                        <option value="ssc">SSC</option>
                        <option value="cbse">CBSE</option>
                        <option value="ib">IB</option>
                      </Select>
                      {errors.board && <ErrorMessage>{errors.board.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="marks">Marks *</Label>
                      <Input
                        id="marks"
                        type="number"
                        hasError={!!errors.marks}
                        {...register("marks", { required: "Marks are required" })}
                      />
                      {errors.marks && <ErrorMessage>{errors.marks.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="cgpa">CGPA *</Label>
                      <Input
                        id="cgpa"
                        type="number"
                        step="0.01"
                        hasError={!!errors.cgpa}
                        {...register("cgpa", { required: "CGPA is required" })}
                      />
                      {errors.cgpa && <ErrorMessage>{errors.cgpa.message}</ErrorMessage>}
                    </FormField>
                  </GridThree>
                </Section>

                <Separator />

                {/* Intermediate/College Details Section */}
                <Section>
                  <SectionTitle>🎓 Intermediate / College Details</SectionTitle>

                  <Grid>
                    <FormField>
                      <Label htmlFor="interCollegeName">Inter College Name</Label>
                      <Input
                        id="interCollegeName"
                        {...register("interCollegeName")}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="course">Course</Label>
                      <Input
                        id="course"
                        {...register("course")}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="interMarks">Marks</Label>
                      <Input
                        id="interMarks"
                        type="number"
                        {...register("interMarks")}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="interCgpa">CGPA</Label>
                      <Input
                        id="interCgpa"
                        type="number"
                        step="0.01"
                        {...register("interCgpa")}
                      />
                    </FormField>
                  </Grid>

                  <FormField>
                    <Label htmlFor="collegeAddress">College Address</Label>
                    <Textarea
                      id="collegeAddress"
                      rows={3}
                      {...register("collegeAddress")}
                    />
                  </FormField>

                  <GridThree>
                    <FormField>
                      <Label htmlFor="collegeCity">City</Label>
                      <Input
                        id="collegeCity"
                        {...register("collegeCity")}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="collegePinCode">Pin Code</Label>
                      <Input
                        id="collegePinCode"
                        maxLength={6}
                        {...register("collegePinCode")}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="collegeState">State</Label>
                      <Select
                        id="collegeState"
                        {...register("collegeState")}
                      >
                        <option value="">Select state</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Select>
                    </FormField>
                  </GridThree>
                </Section>

                <Separator />

                {/* Parent/Guardian Details Section */}
                <Section>
                  <SectionTitle>👨‍👩‍👧 Parent/Guardian Details</SectionTitle>

                  <Grid>
                    <FormField>
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input
                        id="fatherName"
                        hasError={!!errors.fatherName}
                        {...register("fatherName", { required: "Father's name is required" })}
                      />
                      {errors.fatherName && <ErrorMessage>{errors.fatherName.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="fatherMobile">Father's Mobile No. *</Label>
                      <Input
                        id="fatherMobile"
                        type="tel"
                        hasError={!!errors.fatherMobile}
                        maxLength={10}
                        {...register("fatherMobile", {
                          required: "Father's mobile number is required",
                          pattern: { value: /^\d{10}$/, message: "Mobile number must be 10 digits" }
                        })}
                      />
                      {errors.fatherMobile && <ErrorMessage>{errors.fatherMobile.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input
                        id="motherName"
                        hasError={!!errors.motherName}
                        {...register("motherName", { required: "Mother's name is required" })}
                      />
                      {errors.motherName && <ErrorMessage>{errors.motherName.message}</ErrorMessage>}
                    </FormField>

                    <FormField>
                      <Label htmlFor="motherMobile">Mother's Mobile No. *</Label>
                      <Input
                        id="motherMobile"
                        type="tel"
                        hasError={!!errors.motherMobile}
                        maxLength={10}
                        {...register("motherMobile", {
                          required: "Mother's mobile number is required",
                          pattern: { value: /^\d{10}$/, message: "Mobile number must be 10 digits" }
                        })}
                      />
                      {errors.motherMobile && <ErrorMessage>{errors.motherMobile.message}</ErrorMessage>}
                    </FormField>
                  </Grid>
                </Section>

                <Separator />

                {/* Address Section */}
                <Section>
                  <SectionTitle>🏠 Address</SectionTitle>

                  <FormField>
                    <Label htmlFor="presentAddress">Present Address *</Label>
                    <Textarea
                      id="presentAddress"
                      hasError={!!errors.presentAddress}
                      rows={3}
                      {...register("presentAddress", { required: "Present address is required" })}
                    />
                    {errors.presentAddress && <ErrorMessage>{errors.presentAddress.message}</ErrorMessage>}
                  </FormField>
                </Section>

                <Separator />

                {/* Course Selection Section */}
                <Section>
                  <SectionTitle>📚 Course Selection</SectionTitle>

                  <FormField>
                    <Label>Choose the Course *</Label>
                    <CheckboxGrid>
                      {courseOptions.map((option) => (
                        <CheckboxItem key={option.id}>
                          <CheckboxInput
                            type="checkbox"
                            id={option.id}
                            checked={courseSelection.includes(option.id)}
                            onChange={(e) =>
                              handleCheckboxChange("courseSelection", option.id, e.target.checked)
                            }
                          />
                          <CheckboxLabel htmlFor={option.id}>{option.label}</CheckboxLabel>
                        </CheckboxItem>
                      ))}
                    </CheckboxGrid>
                  </FormField>
                </Section>

                <Separator />

                {/* Course Duration Section */}
                <Section>
                  <SectionTitle>⏳ Course Duration</SectionTitle>

                  <FormField>
                    <Label>Course Duration *</Label>
                    <CheckboxGrid>
                      {durationOptions.map((option) => (
                        <CheckboxItem key={option.id}>
                          <CheckboxInput
                            type="checkbox"
                            id={option.id}
                            checked={courseDuration.includes(option.id)}
                            onChange={(e) =>
                              handleCheckboxChange("courseDuration", option.id, e.target.checked)
                            }
                          />
                          <CheckboxLabel htmlFor={option.id}>{option.label}</CheckboxLabel>
                        </CheckboxItem>
                      ))}
                    </CheckboxGrid>
                  </FormField>
                </Section>

                <Separator />

                {/* Source of Information Section */}
                <Section>
                  <SectionTitle>🌐 Source of Information</SectionTitle>

                  <FormField>
                    <Label>How did you approach Borigam? *</Label>
                    <CheckboxGrid cols={3}>
                      {sourceOptions.map((option) => (
                        <CheckboxItem key={option.id}>
                          <CheckboxInput
                            type="checkbox"
                            id={option.id}
                            checked={sourceOfInfo.includes(option.id)}
                            onChange={(e) =>
                              handleCheckboxChange("sourceOfInfo", option.id, e.target.checked)
                            }
                          />
                          <CheckboxLabel htmlFor={option.id}>{option.label}</CheckboxLabel>
                        </CheckboxItem>
                      ))}
                    </CheckboxGrid>
                  </FormField>
                </Section>

                <Separator />

                {/* File Uploads Section */}
                <Section>
                  <SectionTitle>📷 Uploads (Image – Max 100KB)</SectionTitle>

                  <Grid>
                    <FormField>
                      <Label htmlFor="studentPhoto">Student Photo *</Label>
                      <Input
                        id="studentPhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("studentPhoto", e.target.files?.[0] || null)}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="studentSignature">Student Signature *</Label>
                      <Input
                        id="studentSignature"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("studentSignature", e.target.files?.[0] || null)}
                      />
                    </FormField>

                    <FormField>
                      <Label htmlFor="parentSignature">Parent Signature *</Label>
                      <Input
                        id="parentSignature"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("parentSignature", e.target.files?.[0] || null)}
                      />
                    </FormField>
                  </Grid>
                </Section>

                <Separator />

                {/* Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1.5rem' }}>
                  <SubmitButton type="submit">
                    Submit Application
                  </SubmitButton>
                </div>
              </Form>
            </CardContent>
          </Card>
        </FormWrapper>
      </Container>
    </>
  );
}

export default BorigamApplicationForm;