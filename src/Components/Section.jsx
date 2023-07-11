import React from "react";

export default function Section() {
  return (
    <div className="container">
      <div className="hero">
        <h2 className="hero_text">Hi, I am Edilbek</h2>
        <img className="fadeinout w-25" src="https://i.imgur.com/tGDnqxU.gif" />
      </div>
      <h1 className="section2_text">Here you can watch video!</h1>
      <div className="section2">
        <iframe
          className="section2_video"
          src="https://www.youtube.com/embed/Ua47reH_9DQ"
        ></iframe>

        <iframe
          className="section2_video"
          src="https://www.youtube.com/embed/YUVf0AFkn1Y"
        ></iframe>
      </div>
    </div>
  );
}

