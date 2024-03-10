import { useState } from 'react';
import '../assets/css/Feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Feedback:', feedback);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
