import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const linksData = [
  {
    title: "Links",
    link1: "Overons",
    link2: "Social Media",
    link3: "Counters",
    link4: "Contact",
  },
  {
    title: "Company",
    link1: "Terms & Conditions",
    link2: "Privacy Policy",
    link3: "Contact",
    link4: "",
  },
  {
    title: "Get in touch",
    link1: "Crechterwoord K12 182 DK Alknjkcb",
    link2: "085-132567",
    link3: "info@payme.net",
    link4: "",
  },
];

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {linksData.map((item, index) => (
          <div className="gpt3__footer-links_div">
            <h4>{item.title}</h4>
            <p>{item.link1}</p>
            <p>{item.link2}</p>
            <p>{item.link3}</p>
            <p>{item.link4}</p>
          </div>
        ))}
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
