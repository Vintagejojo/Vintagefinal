import React from "react";
import "./About.css";
import anon from '../assets/anonpicture.jpg'

function About() {
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6">
            <div className="left_column">
              <h1 className="about_header">
                Your One Stop Shop for Retro Games
              </h1>
              <p className="about_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                eum placeat numquam tempora! Quibusdam, molestiae ipsum illum
                quia quo ea at eveniet delectus deleniti! Veritatis nisi fuga
                eligendi iste nobis!
              </p>
            </div>
          </div>
          <div className="col-md-6">
              <div className="right_column">
                {/* <img className="profile_picture" src={anon} alt="a mysterious fellow...." /> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
