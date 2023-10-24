import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? fridgeData
      : fridgeData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
    <div className="main">
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {fridgeData.map((phone, idx) => {
            return (
              <div key={idx} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.brand)}
                    onChange={() => companyHandler(phone.brand)}
                  />
                  {phone.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item, idx) => {
            return <ProductCard key={idx} {...item} link={"fridge"} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FridgePage;
