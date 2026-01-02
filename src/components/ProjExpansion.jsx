import React from 'react'
import './ComponentCss/ProjExpansion.css'

const ProjExpansion = ({projectName,visitLink,image,completionText,description,setProjectsVisible,setProjectExpansionVisible}) => {
  return (
    <div className='project-expansion'>
      

        <button id='close-button' onClick={()=>{
            setProjectExpansionVisible(false);
            setProjectsVisible(true);
          
        }} >X</button>

        <h2 id='project-name'>{projectName}</h2>
        <div className='project-content'>
      
            <div className='image-preview-container'>
                <div className='image-preview'>
                    <img src={image} alt='preview image'/>
                </div>
            </div>

            <div className='project-description'>
            
                
                <p>{description}</p>
            
                
            </div>
         

        </div>
        <a id='visit-project-button' target='_blank' href={visitLink}>
            <button >Visit</button>
        </a>
    </div>
  )
}

export default ProjExpansion