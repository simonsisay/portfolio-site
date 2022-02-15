import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProgressBar from "../progress-bar";
import { Container } from "./styles";

type Props = {
  showProgress?: boolean;
};

const Carousel: React.FC<Props> = ({ children, showProgress = true }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const itemsLength = React.Children.count(children);

  const onNext = () => {
    if (activeItemIndex < itemsLength - 1) {
      setActiveItemIndex(activeItemIndex + 1);
    } else {
      setActiveItemIndex(0);
    }
  };

  const onPrev = () => {
    if (activeItemIndex > 0) {
      setActiveItemIndex(activeItemIndex - 1);
    } else {
      setActiveItemIndex(itemsLength - 1);
    }
  };

  return (
    <Container>
      <div className="carousel">
        {React.Children.map(children, (child, index) => {
          if (index === activeItemIndex) {
            return (
              <div className="active">
                {React.cloneElement(child as React.ReactElement, {
                  width: "100%",
                })}
              </div>
            );
          }
        })}
        <div className="footer">
          <div className="buttons">
            <button name="prev-slide" onClick={onPrev}>
              <FaAngleLeft className="arrow-icon" />
            </button>
            <button name="next-slide" onClick={onNext}>
              <FaAngleRight className="arrow-icon" />
            </button>
          </div>
          {showProgress && (
            <div className="progress-bar-container">
              <ProgressBar
                progress={
                  activeItemIndex === 0
                    ? "10%"
                    : `${(activeItemIndex / (itemsLength - 1)) * 100}%`
                }
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
