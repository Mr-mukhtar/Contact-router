import React, { useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData); // Pass formData to the submitHandler function
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '' }); 
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
