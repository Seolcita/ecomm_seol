/** @format */

import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { useHistory } from 'react-router-dom';

// CSS
import './login.scss';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => history.push('/'))
      .catch(err => alert(err.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log('AUTH', auth);

        if (auth) {
          history.push('/');
        }
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1 className='login__title--main'>Sign In</h1>
        <div className='login__form'>
          <input
            className='login__input'
            type='email'
            placeholder='E-mail'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            className='login__input'
            type='password'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button className='login__btn' type='submit' onClick={signIn}>
            Sign In
          </button>
        </div>
        <hr className='login__hr' />
        <div className='login__register'>
          <p>New to this shop?</p>
          <button className='login__register--btn' onClick={register}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
