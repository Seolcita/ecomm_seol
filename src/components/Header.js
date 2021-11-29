/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

// CSS
import { Search, ShoppingBasket } from '@mui/icons-material';
import './header.scss';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      {/* <img className='header__logo' src='' /> */}
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link>
      <div className='header__search'>
        <input className='header__search-bar' type='text' />
        <button className='header__search-btn'>
          <Search />
        </button>
      </div>
      <div className='header__nav'>
        {user ? (
          <div className='header__option'>
            <p>Hello, {user.email.split('@')[0]}</p>
            <p className='header__logout' onClick={() => auth.signOut()}>
              Logout
            </p>
          </div>
        ) : (
          <Link to='/login'>
            <div className='header__option'>Sign In</div>
          </Link>
        )}

        <div className='header__option'>Orders</div>

        <Link to='/checkout'>
          <div className='header__option--cart'>
            <ShoppingBasket className='header__icon' />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
