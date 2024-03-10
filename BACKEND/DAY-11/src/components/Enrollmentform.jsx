import { useState } from 'react';
import axios from 'axios';
import '../assets/css/Enrollementform.css';

const EnrollmentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rating, setRating] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const handleEnroll = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/enrollments', {
        name,
        age,
        rating,
        branch: selectedBranch,
        course: selectedCourse
      });
  
      // Check if the status code is in the range of 200 to 299
      if (response.status >= 200 && response.status < 300) {
        // Enrollment successful
        setPaymentSuccess(true);
      } else {
        // Enrollment failed due to server error
        console.error('Enrollment failed with server error:', response.statusText);
        setError('Failed to enroll. Server error.');
      }
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with error status:', error.response.status);
        console.error('Error response data:', error.response.data);
        setError('Failed to enroll. Server error.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('Failed to enroll. No response from server.');
      } else {
        // Something else happened while setting up the request
        console.error('Error setting up request:', error.message);
        setError('Failed to enroll. Request setup error.');
      }
    }
  };
  
  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleProceed = () => {
    setShowThankYou(true);
  };

  const handleRedirectHome = () => {
    window.location.href = '/homepage';
  };

  return (
    <div className="enrollment-container">
      {!paymentSuccess && !showThankYou && (
        <div className="enrollment-form">
          <h2>Enrollment Form</h2>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
          <label>Rating:</label>
          <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} required />
          <label>Select Nearby Branch:</label>
          <select value={selectedBranch} onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            <option value="branch1">Branch 1</option>
            <option value="branch2">Branch 2</option>
            <option value="branch3">Branch 3</option>
          </select>
          <label>Select Course:</label>
          <select value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select Course</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
          </select>
          <button onClick={handleEnroll}>Enroll</button>
        </div>
      )}
      {paymentSuccess && (
        <div className="enrollment-form">
          {/* <h2>Payment Successful!</h2>
          <p>Thank you for enrolling in the class.</p> */}
          <h3>Select Payment Mode</h3>
          <select value={paymentMode} onChange={handlePaymentModeChange}>
            <option value="">Select Payment Mode</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          <button onClick={handleProceed}>Proceed</button>
        </div>
      )}
      {showThankYou && (
        <div className="thank-you-popup">
          <h2>Thank You!</h2>
          <p>Your payment has been processed successfully.</p>
          <button onClick={handleRedirectHome}>Go to Homepage</button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EnrollmentForm;
