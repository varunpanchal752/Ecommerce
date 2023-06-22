import React from "react";
import { Button } from "@material-ui/core";

import "./Contact.css";
import MetaData from "../../layout/MetaData";


const Contact = () => {
  return (
    <div className="contactContainer">
      <MetaData title="CONTACT -- HANDICRAFTS" />
      <a className="mailBtn" href="mailto:vijaymohansharma22@gmail.com">
        <Button>Contact:vijaymohansharma22@gmail.com</Button>
      </a>
    </div>
  );  
};

export default Contact;
