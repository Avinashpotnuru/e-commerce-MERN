import React, { useState } from "react";
import { kitchenData } from "../data/kitchen";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const KitchenPage = () => {
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
      ? kitchenData
      : kitchenData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {kitchenData.map((phone) => {
            return (
              <div className="pro-input">
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
            return <ProductCard key={idx} {...item} link={"kitchen"} />;
          })}
        </div>
      </div>
    </>
  );
};

export default KitchenPage;