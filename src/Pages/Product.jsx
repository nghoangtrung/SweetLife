import React, { useContext } from "react";
import "./CSS/Product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrums } from "../Components/Breadcrums/Breadcrums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { MenuList } from "../Components/MenuList/MenuList";
import { Banner } from "../Components/Banner/Banner";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <Banner />
      <div className="product-container">
        <div className="product-menu-list">
          <MenuList />
        </div>
        <div className="product-content">
          <Breadcrums product={product} />
          <ProductDisplay product={product} />
        </div>
      </div>
    </div>
  );
};
