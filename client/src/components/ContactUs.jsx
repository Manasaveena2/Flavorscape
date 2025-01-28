// import React from 'react';
// import './styles/ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1>Contact Us</h1>
//       <form>
//         <label>Name:</label>
//         <input type="text" placeholder="Enter your name" required />
//         <label>Email:</label>
//         <input type="email" placeholder="Enter your email" required />
//         <label>Message:</label>
//         <textarea placeholder="Write your message here" required></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;
// src/components/ContactUs.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './styles/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact-us', {
        name,
        email,
        message,
      });
      setIsSubmitted(true);
      console.log(response.data.message); // Success message from the backend
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <label>Email:</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Message:</label>
        <textarea 
          placeholder="Write your message here" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Your message has been sent successfully!</p>}
    </div>
  );
};

export default ContactUs;
