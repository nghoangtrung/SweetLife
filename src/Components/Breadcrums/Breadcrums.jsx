import React from "react";
import "./Breadcrums.css";
import { Link } from "react-router-dom";

export const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      <Link to={`/SweetLife/menu/${product.category}`}>
        {" "}
        <p>
          {" "}
          &lt; <strong>Back to</strong> Menu / {product.categoryName}
        </p>
      </Link>
    </div>
  );
};
