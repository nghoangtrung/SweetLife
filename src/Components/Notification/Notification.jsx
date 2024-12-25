import { React, useEffect } from "react";
import "./Notification.css";

export const Notification = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`notification`}>
      <p>{message}</p>
    </div>
  );
};
