import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
