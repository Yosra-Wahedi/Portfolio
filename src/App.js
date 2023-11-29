import React , { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './Navbar';
import HomePage from './home';
import AboutPage from './about';
import SkillsBar from "./Skill.js"
import Contact from "./Contact.js"
import Footer from './Footer';
import ProjectList from "./ProjectList"
import "./timelineElements.css";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function App() {
  let schoolIconStyles = { background: "#f9c74f" };
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    return () => {
    };
  } );

  return (
    <div>
      <MyNavbar ></MyNavbar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <SkillsBar></SkillsBar>
      <ProjectList/>
      <Contact></Contact>
      <Footer/>
    </div>
  );
}
export default App;




