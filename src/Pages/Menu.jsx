import React, { useContext } from "react";
import "./CSS/Menu.css";
import { Banner } from "../Components/Banner/Banner";
import { MenuList } from "../Components/MenuList/MenuList";
import { ShopContext } from "../Context/ShopContext";
import { MenuItem } from "../Components/MenuItem/MenuItem";

export const Menu = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = props.category
    ? all_product.filter((item) => item.category === props.category)
    : all_product;

  return (
    <div className="menu">
      <Banner />
      <div className="menu-content">
        <div className="menu-list">
          <MenuList />
        </div>
        <div className="menu-container">
          <h2>{props.heading || "Menu"}</h2>
          <hr />
          <div className="menu-products">
            {filteredProducts.map((item, i) => {
              return (
                <MenuItem
                  key={i}
                  id = {item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
