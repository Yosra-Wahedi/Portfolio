import React, { useState } from 'react';
import './ProjectFilter.css';
import Content from "./ProjectContent"
import Images2 from './images2';

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"


const ProjectData = () => {
  useEffect(()=>{
    Aos.init({duration:4000});
},[]);
  const [selectedOption, setSelectedOption] = useState('');
  const data = [
    {      category: "web",
           name:"Employee List",
           image:  Images2.project1,
           note: `Employee List filtered by max and min age`,
           btn : "Visit",
           link: "https://employee-list-eight.vercel.app/",
       },
       {
        category: "web",
           name:"Simon Game",
           image:  Images2.project2,
           note: "Simon Game using HTML,Css and Javascript.",
           btn: "Visit",
           link:"https://yosra-wahedi.github.io/Project/ColorGame/index.html"
       },
       {
        category: "web",
        name:"Dice Game",
        image:  Images2.project3,
        note: "rolling dice using HTML,Css and Javascript.",
        btn :"Visit",
        link:"https://yosra-wahedi.github.io/Dice-Game/"
       },
       {
        category: "web",
        name:"Guess Number",
        image:  Images2.project4,
        note: "guess number using HTML,Css and Javascript.",
        btn :"Visit",
        link:"https://yosra-wahedi.github.io/NumGuess/"
       },
       {
        category: "Graphic",
        name:"Motion Graphic",
        image:  Images2.project5,
        note: "Know me in motion graphic video create in After Effects",
          btn :"Visit",
          link:"https://twitter.com/Yosra_wahedi/status/1319544871514943489?t=CwJoIAbeU58G9jRu6GQhTA&s=19"
          
     },
     {
        category: "web",
        name:"Responsive Website",
        image:  Images2.project6,
        note: "Simple of a responsive web using CSS framwork Bootstrap",
        btn :"Visit",
        link:"https://respon-site.netlify.app/"
   },
{
        category: "Graphic",
        name:"2D Animation",
        image:  Images2.project7,
        note: "Blooming animation create in After Effects and illustrator",
        btn :"Visit",
        link:"https://twitter.com/CodeToInspire/status/1406987764806131712?t=BzZOuFVGrY26nmaI96xX0Q&s=19",
},
{
        category: "Graphic",
        name:"Info Graphic",
        image:  Images2.project8,
        note: "mine of stones create in After Effects and illustrator",
        btn :"Visit",
        link:"https://twitter.com/Yosra_wahedi/status/1345306914444468224?t=si5b4aLmFpAYFJ9r4HIs5Q&s=19"
}
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredData = data.filter((projectData) =>{
    return (projectData.category.toLowerCase().includes(selectedOption.toLowerCase()) &&
   projectData.name.toLowerCase().includes(searchQuery.toLowerCase())
  )} );

  return (
     <section id="projects" className="pro-container" data-aos="fade-in">
      <h1 className="pro-title">Projects</h1>
            <div className="filter-container" id='project'>
                <label className="filter-label">Search By Category:</label>
                <select  value={selectedOption} onChange={handleOptionChange} className="filter-input" id='sty'>
                  <option value="">All</option>
                    <option value='web'>Web Development</option>
                    <option value='Graphic'>Graphic Design</option>
                </select>
                <div className="project-filter__control">
                <label className="filter-label" id='sea'>Search By Name:</label>
                <input type="text"value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search'className="filter-input"/>
            </div>
            </div>
        {filteredData.map((projectData, index) => (
          <Content key={index}
          image={projectData.image}
          name={projectData.name}
          note={projectData.note}
          button={projectData.btn}
          link={projectData.link}
         />
        ))}
      
    </section>
  );
};
export default ProjectData;


