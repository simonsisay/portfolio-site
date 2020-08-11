import React from "react";
import { Container } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <div className="background"></div>
      <div className="content">
        <span className="hero-text-container">
          <h1>
            Hi<span className="comma">,</span> I'm{" "}
            <span className="highlight">Simon</span>
          </h1>
          <h1 className="hero-text">I make things for the web.</h1>
        </span>
        {/* <button className="explore-button">Explore</button> */}
      </div>
      {/* <div className="right-content">
        {/* <img
          className="photo"
          src={require("../../../images/me.jpg")}
          alt="photo of Simon Sisay"
          style={{ zIndex: 10000 }}
        /> */}
      {/* </div> */} */}
    </Container>
  );
};

export default HomePage;
