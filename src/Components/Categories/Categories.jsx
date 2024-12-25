import React from "react";
import "./Categories.css";
import { CategoriesItem } from "../CategoriesItem/CategoriesItem";
import categories_item from "../Assets/categories_item";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-text">
        <h2>Explore Our Best Categories</h2>
        <p>
          Are you ready to experience a heavenly treat that will tantalize your
          taste buds? SweetLife is here to transport you to a world of frozen
          delights!
        </p>
      </div>

      <div className="categories-list">
        {categories_item.map((item, i) => {
          return (
            <CategoriesItem
              key={i}
              name={item.name}
              image={item.image}
              path={item.path}
            />
          );
        })}
      </div>
    </div>
  );
};
