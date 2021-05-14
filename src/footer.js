import React, { useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { newPost } from "./action/posts";

function Footer(props) {
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

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
  });

  const handleInput = (ev) => {
    const input = {
      ...data,
      [ev.target.name]: ev.target.value,
    };
    setData(input);
  };

  const handleButton = () => {
    props.newPost(data);
  };

  return (
    <div className="footer">
      <h3 className="footer__text">Sign up to download the free PDF</h3>

      <div style={formContainer} className="form__container">
        <div style={row} className="matching__input">
          <input
            style={input1}
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleInput}
          />

          <input
            style={input}
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleInput}
          />
        </div>

        <div style={row} className="matching__input">
          <input
            style={input1}
            type="email"
            name="email"
            placeholder="john@email.com"
            onChange={handleInput}
          />

          <input
            style={input}
            type="text"
            name="title"
            placeholder="Your title"
            onChange={handleInput}
          />
        </div>
      </div>

      <button style={btn} className="footer__button" onClick={handleButton}>
        Create account
      </button>

      <p className="footer__text">Copyright 2021 Scrimba</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  newPost: state.postReducer.newPost,
});

export default connect(mapStateToProps, { newPost })(Footer);
