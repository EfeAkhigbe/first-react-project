import React from "react";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isScreenlarge = useMediaQuery({
    query: "(min-width: 769px)",
  });
  let row = {};
  let input1 = {};
  let input = {};
  let formContainer = {};
  let btn = {};

  if (isScreenlarge) {
    row = {
      display: "flex",
      flexDirection: "row",
      width: "100%",
    };

    input1 = {
      marginRight: "10px",
      width: "100%",
    };

    input = {
      width: "100%",
    };

    formContainer = {
      width: "60%",
    };

    btn = {
      width: "60%",
    };
  }

  return (
    <div className="footer">
      <h3 className="footer__text">Sign up to download the free PDF</h3>

      <div style={formContainer} className="form__container">
        <div style={row} className="matching__input">
          <input
            style={input1}
            type="text"
            name="First name"
            placeholder="First name"
          />

          <input
            style={input}
            type="text"
            name="Last name"
            placeholder="Last name"
          />
        </div>

        <div style={row} className="matching__input">
          <input
            style={input1}
            type="email"
            name="Email"
            placeholder="john@email.com"
          />

          <input
            style={input}
            type="text"
            name="title"
            placeholder="Your title"
          />
        </div>
      </div>

      <button style={btn} className="footer__button">
        Create account
      </button>

      <p className="footer__text">Copyright 2021 Scrimba</p>
    </div>
  );
}

export default Footer;
