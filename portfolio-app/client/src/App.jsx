//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Teckstack/Techstack";
import Workexp from "./pages/Worksexp/Workexp";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
      <Layout />
      <div className="container">
        
        <About />
        <Education />
      </div>
      <Techstack />
      <Projects />
      <Workexp />
      <Contact />
      <div className="footer mb-3 ms-3">
        <div className="text-center">
          Made With Mohammad Irfan &copy;2023;
        </div>
      </div>
      <ScrollToTop smooth />

    </>
  );
}

export default App;
