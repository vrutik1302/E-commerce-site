import React from "react";
import cartImage from "../assets/shopping-cart_3433867.png";
const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="left">
          <a>Home</a>
          <a>Products</a>
          <a>Support</a>
          <a>Appliances</a>
        </div>
        <div className="right">
          <div className="cart">
            <img src={cartImage} />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
