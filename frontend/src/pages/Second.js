import React from "react";

function Second() {
  return (
    <div style={{ backgroundColor: "#F7F7FF" }}>
      <div
        style={{
          margin: "50px",
          display: "flex",
          alignItems: "center",
          height: "65vh",
        }}
      >
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
            Find Your <span style={{ color: "#0d5fa6" }}>Ideal Home</span>
          </div>
          <div style={{ lineHeight: "30px", fontSize: "20px" }}>
            Our curated property listings offer both the elegance and
            practicality you seek. With our streamlined process, transitioning
            to your new home is satisfying and stress-free. Embark on your
            search with confidence
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src="https://weleaseusa.com/wp-content/uploads/2023/11/tenants.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Second;
