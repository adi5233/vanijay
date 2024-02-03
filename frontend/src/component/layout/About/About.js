import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dk0sjly3e/image/upload/v1644735186/avatars/svcov6ebdva9mafncntk.jpg"
              alt="Founder"
            />
            <Typography>Aditya Senapati</Typography>
            <span>This is a my first web app.</span>
            <a
              href="https://www.linkedin.com/in/aditya-senapati-8a3350139/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/adi5233" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
