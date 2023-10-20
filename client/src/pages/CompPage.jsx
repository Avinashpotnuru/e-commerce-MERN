import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CompPage = () => {
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
      ? computerData
      : computerData.filter((orange) =>
          selectedProduct.includes(orange.company)
        );

  return (
    <div className="main">
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {computerData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item, idx) => {
            return <ProductCard key={idx} {...item} link={"computers"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CompPage;