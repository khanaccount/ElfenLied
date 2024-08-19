import React from "react";
import s from "./index.module.scss";
import airplaneSvg from "assets/vectors/footer/airplaneSvg.svg";
import logo from "assets/vectors/logo.svg";
import mail from "assets/vectors/footer/mail.svg";

import facebookSvg from "assets/vectors/footer/facebook.svg";
import linkedinSvg from "assets/vectors/footer/linkedin.svg";
import twitterSvg from "assets/vectors/footer/twitter.svg";
import youtubeSvg from "assets/vectors/footer/youtube.svg";

export const Footer: React.FC = () => {
  const linksData = [
    {
      title: "Home",
      links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
    },
    {
      title: "About Us",
      links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
    },
    {
      title: "Properties",
      links: ["Portfolio", "Categories"],
    },
    {
      title: "Services",
      links: [
        "Valuation Mastery",
        "Strategic Marketing",
        "Negotiation Wizardry",
        "Closing Success",
        "Property Management",
      ],
    },
    {
      title: "Contact Us",
      links: ["Contact Form", "Our Offices"],
    },
  ];
  const socialMediaSvg = [
    { SvgComponent: facebookSvg, alt: "Facebook" },
    { SvgComponent: linkedinSvg, alt: "LinkedIn" },
    { SvgComponent: twitterSvg, alt: "Twitter" },
    { SvgComponent: youtubeSvg, alt: "YouTube" },
  ];

  return (
    <footer className={s.footer}>
      <div className={`${s.topFooter} container`}>
        <div className={s.feedback}>
          <div className={s.logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <form className={s.form} action="">
            <img className={s.mail} src={mail} alt="mailSvg" />
            <input placeholder="Enter Your Email" type="text" />
            <button className={s.feedbackBtn}>
              <img src={airplaneSvg} alt="airplaneSvg" />
            </button>
          </form>
        </div>
        <div className={s.links}>
          {linksData.map((section, index) => (
            <div key={index} className={s.link}>
              <a className={s.pageLink} href="/">
                {section.title}
              </a>
              {section.links.map((link, linkIndex) => (
                <a key={linkIndex} className={s.blockLink} href="/">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={s.bottomFooterBg}>
        <div className={`${s.bottomFooter} container`}>
          <div className={s.rights}>
            <p>@{new Date().getFullYear()} Estatein. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
          <div className={s.socialMedia}>
            {socialMediaSvg.map((svg, index) => (
              <button key={index}>
                <a href="/">
                  <img src={svg.SvgComponent} alt={svg.alt} />
                </a>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
