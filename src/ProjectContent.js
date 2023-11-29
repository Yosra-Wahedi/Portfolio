import React from 'react'
import "./ProjectContent.css"
import RatingStars from './RatingStars';


const Content =({image, name,note,button,link})=> {
  return (
    <div className="project-content">
        <img src={image} alt="project content" />
        <div className='layers'>
        <h3>{name}</h3>
        <p>{note}</p>
        <a href={link} className='btn btn-outline-warning btn-lg'>{button}</a>
        <RatingStars />
    </div>
    </div>
  
  )
}

export default Content;