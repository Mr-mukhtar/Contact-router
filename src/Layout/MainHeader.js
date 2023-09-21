// MainHeader.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import Footer from './Footer';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

const MainHeader = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    // redirect the user
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName={classes.active}>
              Welcome
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/products" activeClassName={classes.active}>
                Products
              </NavLink>
            </li>
          
          )}
           {isLoggedIn && (
            <li>
              <NavLink to="/products" activeClassName={classes.active}>
                Products
              </NavLink>
            </li>
          
          )}
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact Us
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to='/auth'>Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      <Footer />
    </header>
  );
};

export default MainHeader;
