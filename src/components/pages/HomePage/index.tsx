import React from "react";
import { Container } from "./styles";
import { push } from "gatsby";

const HomePage = () => {
  return (
    <Container>
      <div className="background"></div>
      <div className="content">
        <span className="hero-text-container">
          <h1>
            <span className="word word-1">Hi</span>
            <span className="comma word word-2">,</span>{" "}
            <span className="word word-3">I'm</span>{" "}
            <span className="word word-4">Simon</span>
          </h1>
          <h1 className="hero-text">
            <span className="word word-5">I</span>{" "}
            <span className="word word-6">make</span>{" "}
            <span className="word word-7">things</span>{" "}
            <span className="word word-8">for</span>{" "}
            <span className="word word-9">the</span>{" "}
            <span className="word word-10">web.</span>
          </h1>
        </span>
        <button className="explore-button" onClick={() => push("/about")}>
          <span className="arrow">></span>
          <span className="text"> Explore</span>
        </button>
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
