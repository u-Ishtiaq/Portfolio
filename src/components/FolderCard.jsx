import React, { createElement } from 'react'
import { createPortal } from 'react-dom';
import './ComponentCss/FolderCard.css'



const FolderCard = ({folderName,image,onClick}) => {

    
    

  return (
    
      <div className='folder-card' id='folder-card' onClick={()=>{
      onClick();
      let projectTitle  = document.getElementById('project-title');
      projectTitle.scrollIntoView();
      }} >
       
        <div className='preview-image'>
             <img src={image} alt='placeholder'></img>
              
        </div>

        <div className='folder-data'>
            <p className='folder-name'>{folderName}</p>
        </div>

              
      </div>
   
  )
}

export default FolderCard