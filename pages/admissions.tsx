// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/router";
// import { LeftOutlined } from "@ant-design/icons";
// import Header from "@/components/Header";

// const Admissions = () => {
//   const router = useRouter();
//   const formRef = useRef<HTMLFormElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [formData, setFormData] = useState({
//     surname: '',
//     studentName: '',
//     fatherName: '',
//     motherName: '',
//     fatherContact: '',
//     motherContact: '',
//     studentContact: '',
//     email: '',
//     dob: '',
//     age: '',
//     gender: '',
//     aadhar: '',
//     presentAddress: '',
//     presentPincode: '',
//     bloodGroup: '',
//     permanentAddress: '',
//     permanentPincode: '',
//     schoolName: '',
//     class: [] as string[],
//     course: [] as string[],
//     duration: '',
//     approach: [] as string[],
//     photo: null as File | null
//   });

//   useEffect(() => {
//     // This will ensure the container is properly positioned
//     if (containerRef.current) {
//       containerRef.current.style.marginTop = "100px";
//     }
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, checked } = e.target;
//     setFormData(prev => {
//       const currentValues = [...prev[name as keyof typeof prev] as string[]];
//       if (checked) {
//         return { ...prev, [name]: [...currentValues, value] };
//       } else {
//         return { ...prev, [name]: currentValues.filter(item => item !== value) };
//       }
//     });
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData(prev => ({
//         ...prev,
//         photo: e.target.files![0]
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     const requiredFields = [
//       'surname', 'studentName', 'fatherName', 'motherName',
//       'fatherContact', 'motherContact', 'studentContact', 'email',
//       'dob', 'age', 'gender', 'aadhar', 'presentAddress',
//       'presentPincode', 'permanentAddress', 'permanentPincode',
//       'schoolName', 'duration'
//     ];

//     requiredFields.forEach(field => {
//       if (!formData[field as keyof typeof formData]) {
//         newErrors[field] = `This field is required`;
//       }
//     });

//     // Validate checkboxes
//     if (formData.class.length === 0) {
//       newErrors.class = 'Please select at least one class';
//     }
//     if (formData.course.length === 0) {
//       newErrors.course = 'Please select at least one course';
//     }
//     if (formData.approach.length === 0) {
//       newErrors.approach = 'Please select at least one option';
//     }

//     // Validate email format
//     if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     // Validate phone numbers
//     const phoneFields = ['fatherContact', 'motherContact', 'studentContact'];
//     phoneFields.forEach(field => {
//       const value = formData[field as keyof typeof formData];
//       if (value && !/^[0-9]{10}$/.test(value as string)) {
//         newErrors[field] = 'Please enter a valid 10-digit phone number';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const isValid = validateForm();
    
//     if (!isValid) {
//       // Find the first error and scroll to it
//       const firstErrorField = Object.keys(errors)[0];
//       if (firstErrorField) {
//         const errorElement = document.getElementById(firstErrorField);
//         if (errorElement) {
//           // Calculate the position to scroll to
//           const elementPosition = errorElement.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.pageYOffset - 150; // Adjust 150px for header
          
//           window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//           });
          
//           // Highlight the error field
//           errorElement.classList.add('error-highlight');
//           setTimeout(() => {
//             errorElement.classList.remove('error-highlight');
//           }, 2000);
//         }
//       }
//       return;
//     }

//     // Form is valid, proceed with submission
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to your backend
//     // router.push('/success'); // Uncomment to redirect on success
//   };

//   return (
//     <>
//       <Header />
//       <div className="container" ref={containerRef}>
//         {/* Back Button */}
//         <button className="back-button" onClick={() => router.push("/")}>
//           <LeftOutlined style={{ marginRight: "6px" }} />
//           Back
//         </button>

//         <div className="form-box">
//           <h2> Application Form</h2>
//           <form ref={formRef} onSubmit={handleSubmit}>
//             <div className="form-grid">
//               {/* Row 1 */}
//               <div id="surname" className="form-group">
//                 <label htmlFor="surname">Surname</label>
//                 <input
//                   type="text"
//                   id="surname"
//                   name="surname"
//                   value={formData.surname}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your surname"
//                 />
//                 {errors.surname && <span className="error-message">{errors.surname}</span>}
//               </div>
//               <div id="studentName" className="form-group">
//                 <label htmlFor="studentName">Student Name</label>
//                 <input
//                   type="text"
//                   id="studentName"
//                   name="studentName"
//                   value={formData.studentName}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter student name"
//                 />
//                 {errors.studentName && <span className="error-message">{errors.studentName}</span>}
//               </div>

//               {/* Row 2 */}
//               <div id="fatherName" className="form-group">
//                 <label htmlFor="fatherName">Father's Name</label>
//                 <input
//                   type="text"
//                   id="fatherName"
//                   name="fatherName"
//                   value={formData.fatherName}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter father's name"
//                 />
//                 {errors.fatherName && <span className="error-message">{errors.fatherName}</span>}
//               </div>
//               <div id="motherName" className="form-group">
//                 <label htmlFor="motherName">Mother's Name</label>
//                 <input
//                   type="text"
//                   id="motherName"
//                   name="motherName"
//                   value={formData.motherName}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter mother's name"
//                 />
//                 {errors.motherName && <span className="error-message">{errors.motherName}</span>}
//               </div>

//               {/* Row 3 */}
//               <div id="fatherContact" className="form-group">
//                 <label htmlFor="fatherContact">Father's Contact</label>
//                 <input
//                   type="tel"
//                   id="fatherContact"
//                   name="fatherContact"
//                   value={formData.fatherContact}
//                   onChange={handleChange}
//                   required
//                   placeholder="Father's phone number"
//                 />
//                 {errors.fatherContact && <span className="error-message">{errors.fatherContact}</span>}
//               </div>
//               <div id="motherContact" className="form-group">
//                 <label htmlFor="motherContact">Mother's Contact</label>
//                 <input
//                   type="tel"
//                   id="motherContact"
//                   name="motherContact"
//                   value={formData.motherContact}
//                   onChange={handleChange}
//                   required
//                   placeholder="Mother's phone number"
//                 />
//                 {errors.motherContact && <span className="error-message">{errors.motherContact}</span>}
//               </div>

//               {/* Row 4 */}
//               <div id="studentContact" className="form-group">
//                 <label htmlFor="studentContact">Student's Contact</label>
//                 <input
//                   type="tel"
//                   id="studentContact"
//                   name="studentContact"
//                   value={formData.studentContact}
//                   onChange={handleChange}
//                   required
//                   placeholder="Student's phone number"
//                 />
//                 {errors.studentContact && <span className="error-message">{errors.studentContact}</span>}
//               </div>
//               <div id="email" className="form-group">
//                 <label htmlFor="email">Email ID</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && <span className="error-message">{errors.email}</span>}
//               </div>

//               {/* Row 5 */}
//               <div id="dob" className="form-group">
//                 <label htmlFor="dob">Date of Birth</label>
//                 <input 
//                   type="date" 
//                   id="dob" 
//                   name="dob" 
//                   value={formData.dob}
//                   onChange={handleChange}
//                   required 
//                 />
//                 {errors.dob && <span className="error-message">{errors.dob}</span>}
//               </div>
//               <div id="age" className="form-group">
//                 <label htmlFor="age">Age</label>
//                 <input
//                   type="number"
//                   id="age"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter age"
//                 />
//                 {errors.age && <span className="error-message">{errors.age}</span>}
//               </div>

//               {/* Row 6 */}
//               <div id="gender" className="form-group">
//                 <label>Gender</label>
//                 <div className="radio-group">
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="gender" 
//                       value="male" 
//                       checked={formData.gender === 'male'}
//                       onChange={handleRadioChange}
//                       required 
//                     /> Male
//                   </label>
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="gender" 
//                       value="female" 
//                       checked={formData.gender === 'female'}
//                       onChange={handleRadioChange}
//                     /> Female
//                   </label>
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="gender" 
//                       value="other" 
//                       checked={formData.gender === 'other'}
//                       onChange={handleRadioChange}
//                     /> Others
//                   </label>
//                 </div>
//                 {errors.gender && <span className="error-message">{errors.gender}</span>}
//               </div>
//               <div id="aadhar" className="form-group">
//                 <label htmlFor="aadhar">Aadhar No.</label>
//                 <input
//                   type="text"
//                   id="aadhar"
//                   name="aadhar"
//                   value={formData.aadhar}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter Aadhar number"
//                 />
//                 {errors.aadhar && <span className="error-message">{errors.aadhar}</span>}
//               </div>

//               {/* Row 7 */}
//               <div id="presentAddress" className="form-group span-2">
//                 <label htmlFor="presentAddress">Present Address</label>
//                 <textarea
//                   id="presentAddress"
//                   name="presentAddress"
//                   value={formData.presentAddress}
//                   onChange={handleChange}
//                   rows={2}
//                   required
//                   placeholder="Enter present address"
//                 ></textarea>
//                 {errors.presentAddress && <span className="error-message">{errors.presentAddress}</span>}
//               </div>

//               {/* Row 8 */}
//               <div id="presentPincode" className="form-group">
//                 <label htmlFor="presentPincode">Pin Code</label>
//                 <input
//                   type="text"
//                   id="presentPincode"
//                   name="presentPincode"
//                   value={formData.presentPincode}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter pin code"
//                 />
//                 {errors.presentPincode && <span className="error-message">{errors.presentPincode}</span>}
//               </div>
//               <div id="bloodGroup" className="form-group">
//                 <label htmlFor="bloodGroup">Blood Group</label>
//                 <input
//                   type="text"
//                   id="bloodGroup"
//                   name="bloodGroup"
//                   value={formData.bloodGroup}
//                   onChange={handleChange}
//                   placeholder="Enter blood group"
//                 />
//               </div>

//               {/* Row 9 */}
//               <div id="permanentAddress" className="form-group span-2">
//                 <label htmlFor="permanentAddress">Permanent Address</label>
//                 <textarea
//                   id="permanentAddress"
//                   name="permanentAddress"
//                   value={formData.permanentAddress}
//                   onChange={handleChange}
//                   rows={2}
//                   required
//                   placeholder="Enter permanent address"
//                 ></textarea>
//                 {errors.permanentAddress && <span className="error-message">{errors.permanentAddress}</span>}
//               </div>

//               {/* Row 10 */}
//               <div id="permanentPincode" className="form-group">
//                 <label htmlFor="permanentPincode">Pin Code</label>
//                 <input
//                   type="text"
//                   id="permanentPincode"
//                   name="permanentPincode"
//                   value={formData.permanentPincode}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter pin code"
//                 />
//                 {errors.permanentPincode && <span className="error-message">{errors.permanentPincode}</span>}
//               </div>
//               <div id="schoolName" className="form-group">
//                 <label htmlFor="schoolName">School/College Name</label>
//                 <input
//                   type="text"
//                   id="schoolName"
//                   name="schoolName"
//                   value={formData.schoolName}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter school/college name"
//                 />
//                 {errors.schoolName && <span className="error-message">{errors.schoolName}</span>}
//               </div>

//               {/* Row 11 */}
//               <div id="class" className="form-group span-2">
//                 <label>Current Class</label>
//                 <div className="checkbox-group">
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="class" 
//                       value="9th" 
//                       checked={formData.class.includes('9th')}
//                       onChange={handleCheckboxChange}
//                     /> 9th Class
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="class" 
//                       value="10th" 
//                       checked={formData.class.includes('10th')}
//                       onChange={handleCheckboxChange}
//                     /> 10th Class
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="class" 
//                       value="11th" 
//                       checked={formData.class.includes('11th')}
//                       onChange={handleCheckboxChange}
//                     /> 11th Class
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="class" 
//                       value="12th" 
//                       checked={formData.class.includes('12th')}
//                       onChange={handleCheckboxChange}
//                     /> 12th Class
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="class" 
//                       value="completed12th" 
//                       checked={formData.class.includes('completed12th')}
//                       onChange={handleCheckboxChange}
//                     /> Completed 12th
//                   </label>
//                 </div>
//                 {errors.class && <span className="error-message">{errors.class}</span>}
//               </div>

//               {/* Row 12 */}
//               <div id="course" className="form-group span-2">
//                 <label>Choose The Course</label>
//                 <div className="checkbox-grid">
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="NIFT" 
//                       checked={formData.course.includes('NIFT')}
//                       onChange={handleCheckboxChange}
//                     /> NIFT
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="NID" 
//                       checked={formData.course.includes('NID')}
//                       onChange={handleCheckboxChange}
//                     /> NID
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="UCEED" 
//                       checked={formData.course.includes('UCEED')}
//                       onChange={handleCheckboxChange}
//                     /> UCEED
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="CEED" 
//                       checked={formData.course.includes('CEED')}
//                       onChange={handleCheckboxChange}
//                     /> CEED
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="B.ARCH" 
//                       checked={formData.course.includes('B.ARCH')}
//                       onChange={handleCheckboxChange}
//                     /> B. ARCH
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="NATA" 
//                       checked={formData.course.includes('NATA')}
//                       onChange={handleCheckboxChange}
//                     /> NATA
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="BFA" 
//                       checked={formData.course.includes('BFA')}
//                       onChange={handleCheckboxChange}
//                     /> BFA
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="AAT" 
//                       checked={formData.course.includes('AAT')}
//                       onChange={handleCheckboxChange}
//                     /> AAT
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="course" 
//                       value="FDDI" 
//                       checked={formData.course.includes('FDDI')}
//                       onChange={handleCheckboxChange}
//                     /> FDDI
//                   </label>
//                 </div>
//                 {errors.course && <span className="error-message">{errors.course}</span>}
//               </div>

//               {/* Row 13 */}
//               <div id="duration" className="form-group span-2">
//                 <label>Course Duration</label>
//                 <div className="radio-group">
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="duration" 
//                       value="longTerm" 
//                       checked={formData.duration === 'longTerm'}
//                       onChange={handleRadioChange}
//                       required 
//                     /> Long Term
//                   </label>
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="duration" 
//                       value="shortTerm" 
//                       checked={formData.duration === 'shortTerm'}
//                       onChange={handleRadioChange}
//                     /> Short Term
//                   </label>
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="duration" 
//                       value="crashCourse" 
//                       checked={formData.duration === 'crashCourse'}
//                       onChange={handleRadioChange}
//                     /> Crash Course
//                   </label>
//                   <label>
//                     <input 
//                       type="radio" 
//                       name="duration" 
//                       value="foundation" 
//                       checked={formData.duration === 'foundation'}
//                       onChange={handleRadioChange}
//                     /> Foundation Course
//                   </label>
//                 </div>
//                 {errors.duration && <span className="error-message">{errors.duration}</span>}
//               </div>

//               {/* Row 14 */}
//               <div id="approach" className="form-group span-2">
//                 <label>How Do You Approach BORIGAM</label>
//                 <div className="checkbox-grid">
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="instagram" 
//                       checked={formData.approach.includes('instagram')}
//                       onChange={handleCheckboxChange}
//                     /> Instagram
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="facebook" 
//                       checked={formData.approach.includes('facebook')}
//                       onChange={handleCheckboxChange}
//                     /> Facebook
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="website" 
//                       checked={formData.approach.includes('website')}
//                       onChange={handleCheckboxChange}
//                     /> Website
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="friends" 
//                       checked={formData.approach.includes('friends')}
//                       onChange={handleCheckboxChange}
//                     /> Friends
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="family" 
//                       checked={formData.approach.includes('family')}
//                       onChange={handleCheckboxChange}
//                     /> Family
//                   </label>
//                   <label>
//                     <input 
//                       type="checkbox" 
//                       name="approach" 
//                       value="newspaper" 
//                       checked={formData.approach.includes('newspaper')}
//                       onChange={handleCheckboxChange}
//                     /> Newspaper
//                   </label>
//                 </div>
//                 {errors.approach && <span className="error-message">{errors.approach}</span>}
//               </div>

//               {/* Row 15 */}
//               <div className="form-group">
//                 <label>Student's Signature</label>
//                 <div className="signature-line"></div>
//               </div>
//               <div className="form-group">
//                 <label>Parent's Signature</label>
//                 <div className="signature-line"></div>
//               </div>

//               {/* Row 16 */}
//               <div className="form-group span-2">
//                 <label htmlFor="photo">Photo Upload</label>
//                 <input 
//                   type="file" 
//                   id="photo" 
//                   name="photo" 
//                   accept="image/*" 
//                   className="file-input"
//                   onChange={handleFileChange}
//                 />
//               </div>
//             </div>

//             <button type="submit" className="submit-btn">
//               Submit Application
//             </button>
//           </form>
//         </div>

//         <style jsx global>{`
//           @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
//         `}</style>

//         <style jsx>{`
//           .container {
//             min-height: 100vh;
//             background: #f8f9fa;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 1rem;
//             position: relative;
//             font-family: 'Open Sans', sans-serif;
//           }

//           .back-button {
//             position: fixed;
//             top: 24px;
//             left: 24px;
//             background: white;
//             border: 1px solid #e0e0e0;
//             padding: 10px 18px;
//             border-radius: 30px;
//             color: #4a6bff;
//             font-weight: 600;
//             font-size: 15px;
//             display: flex;
//             align-items: center;
//             cursor: pointer;
//             box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//             transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//             z-index: 1000;
//             font-family: 'Open Sans', sans-serif;
//           }

//           .back-button:hover {
//             background: #f0f4ff;
//             color: #3a5bef;
//             transform: translateY(-2px);
//             box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
//           }

//           .form-box {
//             background: white;
//             padding: 2.5rem;
//             border-radius: 18px;
//             box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
//             width: 100%;
//             max-width: 920px;
//             margin: 2rem 0;
//             font-family: 'Open Sans', sans-serif;
//           }

//           h2 {
//             text-align: center;
//             margin-bottom: 2rem;
//             color: #ff4500;
//             font-size: 2rem;
//             font-weight: 700;
//             letter-spacing: -0.5px;
//             font-family: 'Open Sans', sans-serif;
//           }

//           .form-grid {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.25rem;
//           }

//           .form-group {
//             margin-bottom: 0.75rem;
//             position: relative;
//           }

//           .span-2 {
//             grid-column: span 2;
//           }

//           label {
//             font-weight: 500;
//             margin-bottom: 0.5rem;
//             color: #444444;
//             display: block;
//             font-size: 0.95rem;
//             font-family: 'Open Sans', sans-serif;
//             line-height: 1.8;
//           }

//           input,
//           textarea,
//           select {
//             padding: 0.85rem;
//             border: 1px solid #e2e8f0;
//             border-radius: 10px;
//             font-size: 0.95rem;
//             width: 100%;
//             background: #f8fafc;
//             transition: all 0.25s ease;
//             font-family: 'Open Sans', sans-serif;
//             color: #444444;
//           }

//           input:focus,
//           textarea:focus,
//           select:focus {
//             outline: none;
//             border-color: #4a6bff;
//             box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.15);
//             background: white;
//           }

//           textarea {
//             resize: vertical;
//             min-height: 80px;
//           }

//           .radio-group,
//           .checkbox-group {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 1rem;
//             margin-top: 0.5rem;
//           }

//           .checkbox-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
//             gap: 0.75rem;
//             margin-top: 0.5rem;
//           }

//           .radio-group label,
//           .checkbox-group label,
//           .checkbox-grid label {
//             font-weight: 400;
//             display: flex;
//             align-items: center;
//             color: #444444;
//             font-size: 0.9rem;
//             cursor: pointer;
//             transition: color 0.2s ease;
//             font-family: 'Open Sans', sans-serif;
//             line-height: 1.8;
//           }

//           .radio-group label:hover,
//           .checkbox-group label:hover,
//           .checkbox-grid label:hover {
//             color: #4a6bff;
//           }

//           input[type="checkbox"],
//           input[type="radio"] {
//             width: auto;
//             margin-right: 0.5rem;
//             accent-color: #4a6bff;
//           }

//           .signature-line {
//             height: 2px;
//             background: #e2e8f0;
//             margin-top: 1.5rem;
//             width: 100%;
//             background: repeating-linear-gradient(to right, #e2e8f0 0%, #e2e8f0 50%, transparent 50%, transparent 100%);
//             background-size: 20px 2px;
//             background-repeat: repeat-x;
//           }

//           .file-input {
//             width: 100%;
//             padding: 1rem;
//             border: 2px dashed #e2e8f0;
//             border-radius: 10px;
//             background: #f8fafc;
//             transition: all 0.3s ease;
//             cursor: pointer;
//             font-family: 'Open Sans', sans-serif;
//           }

//           .file-input:hover {
//             border-color: #4a6bff;
//             background: #f0f4ff;
//           }

//           .submit-btn {
//             background: #ff4500;
//             color: white;
//             font-weight: 600;
//             padding: 1.1rem;
//             border: none;
//             border-radius: 10px;
//             cursor: pointer;
//             transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//             margin-top: 1.5rem;
//             width: 100%;
//             font-size: 1rem;
//             box-shadow: 0 4px 12px rgba(74, 107, 255, 0.25);
//             font-family: 'Open Sans', sans-serif;
//             letter-spacing: 0.5px;
//           }

//           .submit-btn:hover {
//             background: #3a5bef;
//             transform: translateY(-2px);
//             box-shadow: 0 8px 16px rgba(74, 107, 255, 0.3);
//           }

//           .error-message {
//             color: #ff4d4f;
//             font-size: 0.85rem;
//             margin-top: 0.25rem;
//             display: block;
//             font-family: 'Open Sans', sans-serif;
//           }

//           .error-highlight {
//             animation: highlight 2s ease;
//           }

//           @keyframes highlight {
//             0% { background-color: rgba(255, 77, 79, 0.1); }
//             50% { background-color: rgba(255, 77, 79, 0.3); }
//             100% { background-color: rgba(255, 77, 79, 0.1); }
//           }

//           @media (max-width: 768px) {
//             .form-grid {
//               grid-template-columns: 1fr;
//             }
            
//             .span-2 {
//               grid-column: span 1;
//             }
            
//             .checkbox-grid {
//               grid-template-columns: 1fr 1fr;
//             }

//             .form-box {
//               padding: 1.75rem;
//             }

//             h2 {
//               font-size: 1.75rem;
//             }
//           }

//           @media (max-width: 480px) {
//             .form-box {
//               padding: 1.5rem;
//             }
            
//             .checkbox-grid {
//               grid-template-columns: 1fr;
//             }

//             .back-button {
//               top: 16px;
//               left: 16px;
//               padding: 8px 14px;
//               font-size: 14px;
//             }

//             h2 {
//               font-size: 1.5rem;
//             }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Admissions;