import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          dolores illo necessitatibus nesciunt. Sit tempore repellat enim, ex
          excepturi ducimus adipisci deserunt hic harum molestias, quas ipsam!
          Animi vitae ut illo fuga dolorum ad?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          sint neque culpa modi, rem et tenetur sequi veritatis optio nobis,
          tempora excepturi delectus distinctio soluta fugiat sit, obcaecati
          maiores ut molestias temporibus doloribus. Ad.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          commodi rerum suscipit saepe numquam enim modi expedita magnam, sunt
          officiis!
        </p>
      </div>
    </div>
  );
};

export default About;
