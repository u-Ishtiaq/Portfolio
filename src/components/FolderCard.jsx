import React, { createElement } from 'react'
import { createPortal } from 'react-dom';
import './ComponentCss/FolderCard.css'

import {toggle_element_visibility} from '../javascript/main.jsx'

const FolderCard = ({folderName,image,onClick}) => {

    
    

  return (
    
      <div className='folder-card' id='folder-card' onClick={onClick} >
       
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