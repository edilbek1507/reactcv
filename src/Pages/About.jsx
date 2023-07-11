import React from "react";

function About() {
  return (
    <div className="homePage" id="about_hero">
      <div className="about_hero1">
        <h1>
          I am pro Programmer in many languages! But I do not have energy and
          time to finish this page, so you can want some cartoon here!
        </h1>
      </div>
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
      <div className="about_hero2">
        <iframe
          className="about_section2_video"
          src="https://www.youtube.com/embed/_1XCac0VnII"
        ></iframe>

        <iframe
          className="about_section2_video"
          src="https://www.youtube.com/embed/B3jWIvp9h0I"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
