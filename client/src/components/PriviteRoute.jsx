import React, { useContext } from "react";

import { Navigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

const PrivateRoute = ({ children }) => {
  const { auth, setAuth } = useCart();

  const token = localStorage.getItem("token");

  console.log(token);

  console.log(auth);

  return token ? children : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
