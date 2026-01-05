import React from "react";
import HeroCover from "./img/boot taup.jpg";
import "./HeroSection.css";
import Tattoo from "./tattoo/Tattoo";

const HeroSection = () => {
  return (
    <section className="heroCoverContainer">
      <img src={HeroCover} className="HeroCover" alt="HeroSection" />
      <section id="introduction">
        <h3>My name is Tony,</h3>
        <h1>I'm a developer</h1>
      </section>
      <Tattoo />
      otendako
    </section>
  );
};

export default HeroSection;
