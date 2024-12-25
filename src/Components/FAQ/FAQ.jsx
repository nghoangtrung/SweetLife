import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import faqs from "../Assets/faqs";

export const FAQ = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="faq">
      <div className="faq-container">
        <div className="faq-left">
          <h2>Nutrition FAQs</h2>
          <p>
            It’s time to get serious about proportions, health and ice cream. Of
            course, keeping yourself on a daily regimen of exercise, healthy
            diet of fruits and vegetables with a reward here and there—can even
            mean a good ol’ boost of morale!
          </p>
          <Link to="/SweetLife/franchise">
            <button>Explore Our Franchise</button>
          </Link>
        </div>

        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-right-container ${
                activeIndices.includes(index) ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-container-header">
                <p>{faq.question}</p>
                <i className={`fa-solid fa-plus`}></i>
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
