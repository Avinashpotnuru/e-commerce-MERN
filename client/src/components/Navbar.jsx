import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { cartItems } = useCart();
  const [navToggle, setToggle] = useState(false);

  const removeToken = () => {
    localStorage.removeItem("token");

    location.reload();
    setToggle(false);
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>MY SHOP</h2>
          </div>
        </Link>

        <button onClick={removeToken} className="login-button">
          Logout
        </button>
        <Link to="/cart">
          <button className="cart-button">
            My Cart
            <span className="item-count">{cartItems.length}</span>
          </button>
        </Link>
        <div onClick={() => setToggle((prev) => !prev)} className="close">
          {!navToggle ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>

          <button
            onClick={removeToken}
            className="login-button login-button-close"
          >
            Logout
          </button>
        </ul>
      </div>
      {navToggle && (
        <div className="mobsubMenu">
          <ul>
            <Link to="/mobiles" className="custom-link">
              <li>Mobiles</li>
            </Link>

            <Link to="/computers" className="custom-link">
              <li>Computers</li>
            </Link>

            <Link to="/watch" className="custom-link">
              <li>Watches</li>
            </Link>

            <Link to="/men" className="custom-link">
              <li>Mens Wear</li>
            </Link>

            <Link to="/woman" className="custom-link">
              <li>Woman Wear</li>
            </Link>

            <Link to="/furniture" className="custom-link">
              <li>Furniture</li>
            </Link>

            <Link to="/kitchen" className="custom-link">
              <li>Kitchen</li>
            </Link>

            <Link to="/fridge" className="custom-link">
              <li>Fridge</li>
            </Link>

            <Link to="/ac" className="custom-link">
              <li>AC</li>
            </Link>

            <button
              onClick={removeToken}
              className="login-button login-button-close"
            >
              Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
