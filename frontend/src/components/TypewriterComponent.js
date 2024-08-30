import React from "react";
import Typewriter from "react-typewriter-effect";

function TypewriterComponent() {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        width: "100%",
        // backgroundColor: "#rgb(182, 227, 212)",
        backgroundColor: "#F7F7FF",
      }}
    >
      <div
        style={{
          margin: "50px",
          fontSize: "3rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>
          Property Management{" "}
          <Typewriter
            textStyle={{
              fontWeight: "bold",
              color: "#0d5fa6",
              fontSize: "5rem",
              lineHeight: "1",
            }}
            startDelay={100}
            cursorColor="green"
            multiText={["For Landlords", "For Investors", "For All..."]}
            multiTextDelay={1500}
            typeSpeed={100}
          />
        </h1>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              fontSize: "1.175rem",
              lineHeight: "1.75rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Start enhancing your rental income today with Keyrenter Tulsa, the
            top-notch choice for property management services in Tulsa, OK and
            its surrounding areas. Enjoy exceptional service with us!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypewriterComponent;
