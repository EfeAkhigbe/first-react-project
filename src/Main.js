import React from "react";
import Card from "./Card";
import CssIcon from "./CssIcon.js";
import { useMediaQuery } from "react-responsive";

const Main = () => {
  const isScreenWide = useMediaQuery({
    query: "(min-width: 769px)",
  });
  let cardzz = {};
  let cardz = {};

  if (isScreenWide) {
    cardzz = {
      display: "flex",
    };

    cardz = {
      flex: "1 1 0",
    };
  }

  return (
    <div className="main">
      <div className="max-width">
        <div>
          <h4 className="topic">How It Works</h4>

          <div className="line"></div>

          <p>
            Tailwind is designed for rapid development of modern applications.
            At its core, it is robust mobile-first design system built with
            developer experience in mind. After using Tailwind CSS, you will
            find it difficult to go back to use anything else. Learn all about
            it in this all inclusive course.
          </p>
        </div>

        <div>
          <h4 className="topic">Advantages</h4>

          <div className="line"></div>

          <div style={cardzz} className="cards">
            <div style={cardz}>
              <Card
                img={<CssIcon />}
                topic="No custom CSS"
                text="Tailwind's advanced class extraction will leave your project free of custom CSS. You don't have to worry at all."
              />
            </div>

            <div style={cardz}>
              <Card
                img={<CssIcon />}
                topic="Developer Experience"
                text="Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing."
              />
            </div>

            <div style={cardz}>
              <Card
                img={<CssIcon />}
                topic="Mobile Friendly"
                text="Modern applications demand mobile-friendly and Tailwind's responsive modifiers make it easy."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
