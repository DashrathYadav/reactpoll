import React from 'react';
import './About.css'; // Create a CSS file for styling

const developers = [
  {
    name: 'Dasrath Ambika Yadav',
    role: 'Developer',
    imageUrl: 'path_to_dasrath_image', // Add the path to the image for Dasrath
  },
  {
    name: 'Vishal Kumar Gupta',
    role: 'Developer',
    imageUrl: 'path_to_vishal_image', // Add the path to the image for Vishal
  },
];

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <br></br>
      <div className="About-developers">
        {developers.map((developer, index) => (
          <div key={index} className="About-developer-card">
            <div className="About-profile-image">
              <img className='About-profileImage' src={developer.imageUrl} alt={`Profile of ${developer.name}`} />
            </div>
            <div className="About-developer-info">
              <h3>{developer.name}</h3>
              <p>{developer.role}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Hello there! We are Vishal Kumar Gupta and Dasrath Ambika Yadav, the developers behind ReactPoll.
        As developers, we are passionate about creating innovative and user-friendly web applications that solve real-world problems.
        ReactPoll is our latest project, designed to enable users to create and share polls effortlessly.
      </p>
      <p>
        With ReactPoll, you can easily create custom polls, set various options, and share them with your audience.
        Whether you want to gather opinions, make decisions, or just have some fun with friends, ReactPoll has got you covered.
      </p>
      <p>
        We believe in the power of community feedback, and that's why we built this platform.
        Your feedback is invaluable to us, and we are committed to continually improving ReactPoll based on your suggestions.
      </p>
      <p>Thank you for using ReactPoll. Happy polling!</p>
      <p>Sincerely,</p>
    </div>
  );
};

export default About;
