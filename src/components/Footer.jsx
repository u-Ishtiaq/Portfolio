import React from 'react'
import './ComponentCss/Footer.css'

import GithubIcon from '../assets/Icons/GithubIcon.svg'
import LinkedInIcon from '../assets/Icons/LinkedInIcon.svg'

const Footer = ({linkedin,github}) => {
  return (
    <div className='footer'>
        <div className='icon-rack'>
        <a href='https://github.com/u-Ishtiaq'> 
            <img className='icon' src={GithubIcon} /> 
        </a>

        <a href='https://www.linkedin.com/in/usman-ishtiaq-5b66ab1a2/'> 
            <img className='icon' src={LinkedInIcon} /> 
        </a>


        </div>
    
    </div>
    
  )
}

export default Footer