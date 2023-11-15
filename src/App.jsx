import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Top from "./components/Top";
import Video from "./components/Video";
import About from "./components/About";
import Course from "./components/Course";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip" href="#skipnav">
        skip navigation
      </a>
      <Nav/>
      <Header/>
      <div id="skipnav" />
      <Top/>
      <Video/>
      <About/>
      <Course/>
      <Footer/>
    </>
  );
}

export default App;
