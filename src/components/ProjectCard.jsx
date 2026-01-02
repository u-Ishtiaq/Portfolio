import React from 'react'
import './ComponentCss/ProjectCard.css'




const ProjectCard = ({projectName,image,visitLink,description,completionText,onClick,inDetailCallback}) => {
  

  return (
   
      <div className='project-card' onClick={()=>{
        onClick();
        inDetailCallback({name:projectName,image:image,link:visitLink,tagText:completionText,description:description});
        /* asign everything and scoll it into view */
        let projectTitle  = document.getElementById('project-title');
        projectTitle.scrollIntoView();

      }} >

          <div className='preview-image' id='image-preview'>
              <img id='project-image' src={image}></img>
          </div>
          <div className='project-data'>
              <p className='project-name'>{projectName}</p>
                
          </div>
    
              
      </div>
   
  )
}

export default ProjectCard