import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  product,
  image,
  category,
  description,
  model,
  price,
  link,
}) => {
  return (
    <Link to={`/${link}/${id}`}>
      <div className="product-card">
        <div className="product-tumb">
          <img src={image} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{product}</span>
          <h4>{model}</h4>
          <p>{description}</p>
          <div className="product-bottom-details">
            <div className="product-price">{price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
