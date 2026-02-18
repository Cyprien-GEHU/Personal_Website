import React from "react";
import Header from "./Header/Header.jsx";
import AboutMe from "./AboutMe/AboutMe.jsx";
import Competence from "./Competence/Competence.jsx";
import Projects from "./Projects/Projects.jsx";
import ContactMe from "./ContactMe/ContactMe.jsx";


class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-900 text-white">
        <Header />
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="skill">
          <Competence />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contactme">
          <ContactMe />
        </div>
      </div>
    );
  }
}

export default App;
