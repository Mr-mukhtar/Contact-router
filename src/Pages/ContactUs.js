// ContactUs.js
import React from 'react';
import ContactForm from '../Components/Contact/ContactForm';
const ContactUs = () => {
  const submitHandler = async (formData) => {
    try {
      const response = await fetch(
        'https://contactus-f562c-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit data.');
      }

      const data = await response.json();
      console.log('API Response Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={submitHandler}  />
    </div>
  );
};

export default ContactUs;
