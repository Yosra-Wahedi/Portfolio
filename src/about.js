import React,{useEffect} from "react";
import "./about.css"
import Aos from "aos";
import "aos/dist/aos.css"
export default function AboutPage(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
return(
        <div className="container-fluid" id="about">

 <hr border-style="dashed solid;"/> 
 <br></br>
 <img data-aos="fade-right"src='image/aboutme.png' alt='aboutPhoto' className="about_img"/>
<h1 data-aos="fade-left" className="change-color">Who I am</h1>
<p data-aos="fade-left"> My name's Yosra. I'm a web developer and graphic designer based in Herat,Afghanistan. </p>
<p data-aos="fade-left">During the day I work as a lead desinger and in the evening I teach designs projects
   and utilize the time to built my own products. 
   I spent my leisure hours writing articles and searching new things.
    Right now I'm also trying a hand at React learning and 3D designs.
     I love to learn and explore new things.
     Here are my resent achievements.</p>
 </div>
)
}


//data-aos="flip-left"