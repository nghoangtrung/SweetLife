import { React, useState } from "react";
import "./CategoriesItem.css";
import { Link } from "react-router-dom";

export const CategoriesItem = (props) => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="categories-item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>

      <Link
        to={props.path}
        onClick={() => {
          setMenu("menu"),
            window.scrollTo({
              top: 0,
            });
        }}
      >
        <button>
          <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </Link>
    </div>
  );
};

export default CategoriesItem;
