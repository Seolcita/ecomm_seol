/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

// CSS
import { Search, Cookie, ShoppingBasket } from "@mui/icons-material";
import "./header.scss";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <h3 className="header__title">
          <Cookie className="header__logo" />
          Cookie Monster
        </h3>
      </Link>

      <div className="header__nav">
        {user ? (
          <>
            <div className="header__option">
              <p>Hello, {user.email.split("@")[0]}</p>
            </div>
            <Link to="/orders">
              <div className="header__option">Orders</div>
            </Link>
            <Link to="/checkout">
              <div className="header__option--cart">
                <ShoppingBasket className="header__icon" />
                <span>{basket?.length}</span>
              </div>
            </Link>
            <div className="header__option">
              <p className="header__logout" onClick={() => auth.signOut()}>
                Logout
              </p>
            </div>
          </>
        ) : (
          <Link to="/login">
            <div className="header__option">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
