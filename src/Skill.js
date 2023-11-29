import "./skill.css";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"
function SkillsBar () {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <div id = "skill">
            <h1>Skills</h1>
        <div className="allcontainers">
            <div className="container2" data-aos="fade-right">
            <h1 className="title-text">Web Skills</h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">WordPress</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>          
            </div>




            <div className="container2" data-aos="fade-left">
            <h1 className="title-text">Graphic Skills</h1>

            <div className="skill-box">
                <span className="title">Photoshop</span>
                <div className="skill-bar">
                    <span className="skill-per photoshop">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Illustrator</span>
                <div className="skill-bar">
                    <span className="skill-per illustrator">
                        <span className="tooltip">90%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">After Effects</span>
                <div className="skill-bar">
                    <span className="skill-per AfterEffects">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Blender</span>
                <div className="skill-bar">
                    <span className="skill-per Blender">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">premiere</span>
                <div className="skill-bar">
                    <span className="skill-per premiere">
                        <span className="tooltip">50%</span>
                    </span>
                </div>
            </div>          
            </div>
        </div>
        </div>
    )
 }

 export default SkillsBar;








