
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './contactform';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

import "./ContactSection.css"
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css"

export default function ContactSection() {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
  return (
  
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div data-aos="fade-right" className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+93 712345235" />
            <ContactInfoItem icon={<MdEmail />} text="yosrawahidi786@gmail.com" />
            <ContactInfoItem text="Herat, Afghanistan" />
            <div data-aos="fade-right" width= "100%" id="map"><iframe width="600" height="300" title="Here is me" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=900&amp;height=500&amp;hl=en&amp;q=1%20Mahtab%20Street,%20Herat,%20Afghanistan+(my%20home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe></div>
          </div>
          <div data-aos="fade-left" className="right">
           <ContactForm/>
          </div>
        </div>  
      </div>
   
  );
}







