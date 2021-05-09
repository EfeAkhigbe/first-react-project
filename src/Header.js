import React from "react";
import "./App.css";
import Logo from "./Logo";
import Tailwindlogo from "./Tailwindlogo";

function Header() {
  return (
    <div className="header">
      <div className="max-width">
        <Logo className="logo" />

        <h3>Want to learn Tailwind CSS?</h3>

        <p>
          Tailwind is the fastest growing utility-first CSS framework. Let's
          learn it step by step.
        </p>

        <div className="btn__tailwind">
          <button className="btn__enroll">ENROLL NOW</button>

          <Tailwindlogo className="tailwindlogo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
