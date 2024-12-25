import React from "react";
import "./Location.css";
import location_img from "../Assets/Location.png";

export const Location = () => {
  return (
    <div className="location">
      <div className="location-left">
        <img src={location_img} alt="" />
      </div>
      <div className="location-right">
        <h2>New Store</h2>
        <p>
          SweetLife has proudly opened a brand-new store on Thu Khoa Huan
          Street! This trendy and vibrant spot is the perfect place to chill
          with friends and savor your favorite sweet treats. With its modern
          design and cozy atmosphere, our new store invites you to create
          unforgettable moments while indulging in our delectable flavors. We
          can't wait to welcome you to this exciting new location!
        </p>
        <a
          href="https://www.google.com/maps/place/Pizza+4P's+B%E1%BA%BFn+Th%C3%A0nh/@10.7733606,106.6939403,17z/data=!4m10!1m2!2m1!1sPizza+4P's!3m6!1s0x31752f7998588b7d:0x8f43f3d4a8472384!8m2!3d10.773361!4d106.6976173!15sCgpQaXp6YSA0UCdzIgOIAQFaDCIKcGl6emEgNHAnc5IBEHBpenphX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11k1lbvf9v?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="blank"
        >
          Find Our Store
        </a>
      </div>
    </div>
  );
};
