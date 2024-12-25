import React from "react";
import './CSS/LoginSignup.css'
import { LoginForm } from "../Components/LoginForm/LoginForm";
import background_img from "../Components/Assets/Background.png";

export const LoginSignup = () => {
  return (
    <div className="login">
      <LoginForm />
      <img src={background_img} alt="" />
    </div>
  );
};
