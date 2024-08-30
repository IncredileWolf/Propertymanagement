import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
function AboutUs() {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "rgb(247, 247, 255)",
          width: "100%",
          padding: "30px",
        }}
      >
        <div className="row md-6">
          <h3
            style={{
              fontSize: "2.5rem",
              display: "flex",
              justifyContent: "center",
              margin: "20px 0", // Adds vertical space around the entire <h3> element
              padding: "10px", // Adds space inside the <h3> element
            }}
          >
            Main{" "}
            <span style={{ color: "rgb(13, 95, 166)", fontWeight: "bold" }}>
              Office Location
            </span>{" "}
            MET IIT Mumbai
          </h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724243756777!5m2!1sen!2sin"
            width="600"
            height="450"
            // allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.63014256665!2d85.1359573472509!3d25.617203619459023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59fcc6bad6ab%3A0xfb0be62188538408!2sCentre%20For%20Development%20Of%20Advanced%20Computing(C-DAC%2CPatna)%20%2CBiscomaun%20Tower!5e0!3m2!1sen!2sin!4v1692686729219!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971786.0268984128!2d73.298583586029!3d17.930327016158735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc18248b7008219%3A0x66a33d8736d2773b!2sSunBeam%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1707726154098!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" height="450" style={{border:0}} allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
