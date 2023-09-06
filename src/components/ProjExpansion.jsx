import React from 'react'
import './ComponentCss/ProjExpansion.css'

const ProjExpansion = ({projectName,visitLink,image,completionText,description,setProjectsVisible,setProjectExpansionVisible}) => {
  return (
    <div className='project-expansion'>
      

        <button id='close-button' onClick={()=>{
            setProjectExpansionVisible(false);
            setProjectsVisible(true);
        }} >X</button>

        <h2>{projectName}</h2>
        <div className='project-content'>
            <div className='image-preview'>
                <img src={image} alt='preview image'></img>
            </div>

            <div className='project-description'>
                <div className='description-block'>
                 <p>{description}</p>
                </div>
            </div>
         

        </div>
        <a href={{visitLink}}>
            <button id='visit-project-button'>Visit</button>
        </a>
    </div>
  )
}

export default ProjExpansion