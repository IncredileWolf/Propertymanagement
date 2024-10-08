import React from "react";
import "../pages/Support.css";
const Support = () => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6489/6489433.png"
          alt="Image 1"
        />
        <h5>Property Buy and sell</h5>
        <p style={{ color: "white" }}>
          Book Your Favourite Property on all over India
        </p>
      </div>
      <div class="vertical"></div>
      <div className="image-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1701/1701773.png"
          alt="Image 2"
        />
        <h5>SUPPORT 24/7</h5>
        <p style={{ color: "white" }}>
          Our support team is always there for you
        </p>
      </div>
      <div class="vertical"></div>
      <div className="image-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1488/1488176.png"
          alt="Image 3"
        />
        <h5>MONEY RETURN</h5>
        <p style={{ color: "white" }}>
          Please refer to returns and exchange section for more details
        </p>
      </div>
    </div>
  );
};

export default Support;
