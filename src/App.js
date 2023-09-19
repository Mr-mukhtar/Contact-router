import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import MainHeader from './Components/MainHeader';
import ContactForm from './Pages/ContactForm';
import ProductDetails from './Pages/ProductDetails';

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
      <main>
        <Switch>
          <Route path="/" exact>
         <Redirect to="/welcome"/>
          </Route>
        <Route path="/welcome">
        <Welcome />
      </Route>
      
      <Route path="/contact">
        <ContactForm onSubmit={submitHandler} />
      </Route>
      <Route path="/products"  exact>
        <Products/>
      </Route>
      <Route path="/products/:productID">
        <ProductDetails/>
      </Route>
      
        </Switch>
      </main>
    </div>
  );
};

export default App;
