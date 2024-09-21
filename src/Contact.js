import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email or store question in a database
    console.log('Email:', email);
    console.log('Question:', question);
    // You can add your logic for handling form submission here
    // Reset form fields after submission
    setEmail('');
    setQuestion('');
    // Set submitted to true to display success message
    setSubmitted(true);
    // Reset success message after a few seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to reach out to us:</p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="question">Your Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="4"
            required
            style={{ ...inputStyle, height: '100px' }}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
      {submitted && <p style={successMessageStyle}>Your message was successfully submitted!</p>}
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const formStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const submitButtonStyle = {
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const successMessageStyle = {
  marginTop: '20px',
  backgroundColor: '#d4edda',
  color: '#155724',
  border: '1px solid #c3e6cb',
  borderRadius: '5px',
  padding: '10px',
};

export default Contact;
