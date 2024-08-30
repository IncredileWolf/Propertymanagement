import React from "react";
import "../pages/OurTeam.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from "../components/images/Pranjali.jpeg";
import img2 from "../components/images/shubhi.jpg";
import img3 from "../components/images/puja.jpg";
import img4 from "../components/images/vrunda.jpg";

import img5 from "../components/images/rohit.jpeg";
import img6 from "../components/images/supriya.jpg";
import img7 from "../components/images/pratiksha.jpeg";
import SecImage from "../components/SecImage";

function OurTeam() {
  return (
    <>
      <div>
        About Us <br />
        <section
          id="team"
          class="team"
          style={{ backgroundColor: "rgb(13, 95, 166)" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              color: "white",
              fontWeight: "bold",
              paddingTop: "30px",
              letterSpacing: "3px",
            }}
          >
            <br /> Our Team
          </h1>
          <SecImage></SecImage>

          <div class="row">
            <div class="card">
              <div class="image">
                <img src={img5} />
                {/* add image here */}
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Rohit
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img2} />
                {/* add image here */}
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Shubhi
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img3} />
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Puja
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img4} alt="" />
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Vrunda
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img1} alt="" />
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Pranjali
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img7} alt="" />
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Pratiksha
                </h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={img6} alt="" />
              </div>
              <div class="info">
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  Supriya
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurTeam;
