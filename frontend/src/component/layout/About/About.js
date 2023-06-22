import React from "react";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./aboutSection.css";
import MetaData from "../../layout/MetaData";

const About = () => {
  const visitLinkedin = () => {
      window.location = "https://www.linkedin.com/in/varun-kumar-panchal-55a9a41a2/";
  };
  return (
    <div className="aboutSection">
      <MetaData title="ABOUT US -- HANDICRAFTS" />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dbb6nhmvw/image/upload/v1685739980/WhatsApp_Image_2020-10-18_at_3.13.59_PM_ltmyqy.jpg"
              alt="Founder"
            />
            <Typography>Varun Panchal</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button>
            <span>
              Moffkaiser Handicrafts wesbite made by @mevarunnaman.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/@Moffkaiser"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/moffkaiser/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
