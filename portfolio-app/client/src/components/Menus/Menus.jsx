import React from "react";
import "./Menus.css";
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';



import { Link } from "react-scroll";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Fade } from "react-reveal";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
        <div className="navabr-profile-pic">
            <img src="/public/images/profile-picture.jpeg" alt="profile pic" />
          </div>
        </Zoom>
        <Fade left>
          
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>

              </div>
              <div className="nav-link">
              <Link to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
              >
              <FcReadingEbook />
                Education
              </Link>
              
               
              </div>
              <div className="nav-link">
              <Link to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
              >   <FcBiotech />
                Tech Stack

              </Link>
             
              </div>
              <div className="nav-link">
              <Link to="ads"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
              ><FcVideoProjector />
                Projects</Link>
              
                
              </div>

              <div className="nav-link">
              <Link to="work"
               spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
              >
              <FcPortraitMode />
                Work Experince
              </Link>
              
              
              </div>

              <div className="nav-link">
              <Link to="contact"
               spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
              >
              <FcBusinessContact />
                Contact
              </Link>
               
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout />
              </div>
              <div className="nav-link">
                <FcPortraitMode />
              </div>
              <div className="nav-link">
                <FcBiotech />
              </div>
              <div className="nav-link">
                <FcReadingEbook />
              </div>
              <div className="nav-link">
                <FcVideoProjector />
              </div>
             
             
              <div className="nav-link">
                <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
