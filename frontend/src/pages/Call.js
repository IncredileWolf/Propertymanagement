import React from "react";

function Call() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
        Schedule a <span style={{ color: "#0d5fa6" }}> Consultation</span>Today
      </div>
      <div>
        <p style={{ fontSize: "20px", width: "500px", textAlign: "center" }}>
          Schedule a consultation today and let us help you get the most out of
          your investment property.
        </p>
      </div>
    </div>
  );
}

export default Call;
