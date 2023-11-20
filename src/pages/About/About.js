import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import pic from "../../assets/images/profile_pic.jpg";

const About = () => {
  return (
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-12 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={pic} alt="profile pic" />
          </div>
          <div className="col-md-12 col-xl-6 col-lg-6 col-xs-12  about-content">
            <h1>About me</h1>
            <p>
              Hello 👋, I'm Rakesh Sankhla, a passionate web developer with a
              strong background in Civil Engineering. Currently, I am pursuing a
              B.Tech degree in Civil Engineering at IIT Kanpur. Although my
              academic journey lies in Civil Engineering, I found my true
              passion in web development. I enjoy the process of creating
              visually appealing and functional websites that provide great user
              experiences. I have honed my skills in HTML, CSS, JavaScript, and
              various web development frameworks like Bootstrap. I also have
              experience working with front-end libraries and tools, which have
              allowed me to develop modern and responsive web applications. I'm
              excited about the endless possibilities in web development and
              eager to take on new opportunities to make a positive impact on
              the digital world.
            </p>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default About;
