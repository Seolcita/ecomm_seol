/** @format */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Pages & Components
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Payment from './pages/Payment';

// CSS
import './app.scss';

const promise = loadStripe(
  'pk_test_51K1JOkEtRHwOqOR0rh7jr5T4zP7gMNJvGWcSgjZ5nAaaVfIQWxxkEeL5CuZXMQiDhzIofWh8dHrRcvJL4rTguDnQ00BOZRgK0a'
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
        <Elements stripe={promise}>
          <Route exact path='/payment' component={Payment} />
        </Elements>
      </Switch>
    </div>
  );
};

export default App;
