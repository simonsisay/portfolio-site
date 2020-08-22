import React from "react";
import { Container } from "./styles";
import { push } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HomePage = () => {
  const breakpoints = useBreakpoint();
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
        {breakpoints.sm && (
          <div className="social-icons">
            <a
              rel="noopener noreferrer"
              href={"https://twitter.com/sisay_simon"}
              target="_blank"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              rel="noopener noreferrer"
              href={"https://github.com/simonsisay"}
              target="_blank"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/simon-sisay-446181187/"
              target="_blank"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
