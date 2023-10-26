import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Fade from 'react-reveal/Fade';


import Resume from '../../assets/docs/Mohdirfan.pdf';

const Home = () => {
  return (
    <>
      <div className="conatainer-fluid home-container" id="home">
        <div className="conatiner home-content">
        <Fade right>
          <h2> Hi I am a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer ! ",
                  "Mern Stack Developer !",
                  "React native Develoer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          </Fade>
          <Fade buttom>
          <div className="home-buttons">
            <button className="btn btn-hire">
              Hire Me
            </button>
            <a className="btn btn-cv" href={Resume} download=" your_name.pdf">
              My Resume
            </a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
