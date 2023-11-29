import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const FooterStyle = styled.div`
#footer{
    background-color:rgb(243, 187, 3);
   
}
.media{
    margin-right:6px;
    cursor: pointer;
}
p{
    color:black;
}
`;
function Footer() {
const [year,setYear]= useState(new Date().getFullYear());
useEffect(()=> {
const interval = setInterval(()=>{
    setYear(new Date().getFullYear());
    },1000); 
    return () => clearInterval(interval);


},[]);
  return (
    <FooterStyle>
  <footer id="footer">
    <div className="container-fluid">
    <p>© Copyright {year} Yosra Wahedi</p>

 <a href='https://www.facebook.com/yosra.wahedi.5?mibextid=9R9pXO'>
  <FaFacebook size={25} color="0000"  className='media'/>
 </a>

    <a href='https://twitter.com/Yosra_wahedi?t=0s5lcrMI4CF2n5-FuvbDGg&s=35'>
    <FaTwitter size={25} color="0000" className='media'/>
    </a>

    <a href='https://instagram.com/wahediyosra?igshid=MWZjMTM2ODFkZg=='>
    <FaInstagram size={25} color="0000" className='media'/>
    </a>

    <a href='https://www.linkedin.com/in/yosra-wahedi-964812219'>
    <FaLinkedin size={25} color="0000" className='media'/>
      </a>
  </div>
  </footer>
    </FooterStyle>
  )
}

export default Footer;