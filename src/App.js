import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './Components/MainHeader';
import ContactForm from './Pages/ContactForm';

const App = () => {
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
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact">
        <ContactForm onSubmit={submitHandler} />
      </Route>
    </div>
  );
};

export default App;
