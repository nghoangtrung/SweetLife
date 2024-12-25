import React from "react";
import "./ActionBanner.css";
import ice_cream_icon from "../Assets/Ice Cream Icon.png";
import ice_pop_icon from "../Assets/Ice Pop Icon.png";
import ice_cream_cone_icon from "../Assets/Ice Cream Cone Icon.png";

export const ActionBanner = () => {
  const items = [
    { type: "text", content: "BUY YOURS NOW" },
    { type: "image", content: ice_cream_icon },
    { type: "text", content: "BUY YOURS NOW" },
    { type: "image", content: ice_pop_icon },
    { type: "text", content: "BUY YOURS NOW" },
    { type: "image", content: ice_cream_cone_icon },
    { type: "text", content: "BUY YOURS NOW" },
  ];

  return (
    <div className="action-banner">
      {items.map((item, index) => (
        <div key={index} className="action-banner-item">
          {item.type === "text" ? (
            <p>{item.content}</p>
          ) : (
            <img src={item.content} alt={`Ice Cream Icon ${index + 1}`} />
          )}
        </div>
      ))}
    </div>
  );
};
