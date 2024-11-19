import React from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        🛒 <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
