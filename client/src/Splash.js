import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <div className="height">
      <div className="outerbox height col-lg-6 col-12 mx-auto d-flex flex-column justify-content-center align-items-center">
        <div className="name">
          <h2 className="textsplash">The Next Step</h2>
        </div>
        <div className="buttons">
          
          <a
            href="/admin/signin"
            class="btn btn-outline-success btnsplash"
            role="button"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Splash;