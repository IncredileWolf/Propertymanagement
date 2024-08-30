import React from "react";

function First() {
  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        alignItems: "center",
        height: "65vh",
      }}
    >
      <div style={{ width: "60%" }}>
        <img src="https://weleaseusa.com/wp-content/uploads/2023/11/owner.png"></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          gap: "30px",
          width: "50%",
        }}
      >
        <div style={{ fontSize: "35px", fontWeight: "500" }}>
          Property <span style={{ color: "#0d5fa6" }}> Management</span> Made
          Simple
        </div>
        <div style={{ lineHeight: "30px", fontSize: "20px" }}>
          At PURE Property Management of Texas, our mission is to provide you
          with a simple, satisfying, and innovative real estate investing
          experience. Discover the seamless way to superior results, constant
          growth, and peace of mind.
        </div>
      </div>
    </div>
  );
}

export default First;
