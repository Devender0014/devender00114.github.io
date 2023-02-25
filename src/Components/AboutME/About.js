import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import proficePic from "../../images/IMG_2262_1_-removebg-preview.png"
const AboutMe = () => {
  return (
    <div className="wraping">
      <div className="about-me" id="about">
      <div className="about-me-info">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <h1>About Me </h1>
        </ScrollAnimation>

        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <p>
          I am a FullStack Developer and a curious person who loves to know how
          different things work together. I love to BUILD STUFF and connect with
          people smarter than me!
        </p>
        <p>
        You will find me playing Pubg, reading or watching Netflix when I am not smashing the keyboard.
        </p>
        <p>Currently, I am a student at Masai School.</p>
        </ScrollAnimation>

      </div>
      <div className="profilePic">
        <img
          src={proficePic}
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
