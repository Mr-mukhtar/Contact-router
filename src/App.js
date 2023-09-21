// App.js

import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import ProductDetails from './Components/product/ProductDetails'; // Ensure this import is correct
import ContactUs from './Pages/ContactUs';
import Layout from './Layout/Layout';
import AuthPage from './Pages/AuthPage';
import AuthContext from './store/auth-context';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/products' exact>
            {authCtx.isLoggedIn ? <Products /> : <Redirect to='/auth' />}
          </Route>
          <Route path='/products/:productID'>
            <ProductDetails />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path='/auth'>
              <AuthPage />
            </Route>
          )}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
};

export default App;
