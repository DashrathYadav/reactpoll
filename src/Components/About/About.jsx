import React from "react";
import "./About.css"; // Create a CSS file for styling
import dasrath from "../../assets/dasrath.jpeg";
import vishal from "../../assets/vishal.jpeg";

const developers = [
  {
    name: "Vishal Kumar Gupta",
    role: "Developer",
    imageUrl: vishal, // Add the path to the image for Vishal
  },
  {
    name: "Dasrath Ambika Yadav",
    role: "Developer",
    imageUrl: dasrath, // Add the path to the image for Dasrath
  },
];

const About = () => {
  return (
    <div className="about-us">
      <h1 style={{textAlign:"center"}}>About Us</h1>
      
      <div className="About-developers">
        {developers.map((developer, index) => (
          <div key={index} className="About-developer-card">
            <div className="About-profile-image">
              <img
                className="About-profileImage"
                src={developer.imageUrl}
                alt={`Profile of ${developer.name}`}
              />
            </div>
            <div className="About-developer-info">
              <h3 >{developer.name}</h3>
              <p>{developer.role}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="About-para">
        Hello there! We are Vishal Kumar Gupta and Dasrath Ambika Yadav, the
        developers behind ReactPoll. As developers, we are passionate about
        creating innovative and user-friendly web applications that solve
        real-world problems. ReactPoll is our latest project, designed to enable
        users to create and share polls effortlessly.
        With ReactPoll, you can easily create custom polls, set various options,
        and share them with your audience. Whether you want to gather opinions,
        make decisions, or just have some fun with friends, ReactPoll has got
        you covered.
        We believe in the power of community feedback, and that's why we built
        this platform. Your feedback is invaluable to us, and we are committed
        to continually improving ReactPoll based on your suggestions.
        <p style={{padding:"20px"}}>Thank you for using ReactPoll. Happy polling!</p>
        <p>Sincerely,</p>
      </p>
      
      
      
    </div>
  );
};

export default About;
