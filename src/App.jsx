import {useState} from "react";

{/* Data*/}
import './CSS/App.css'
import { portfolioData } from "./ProjectData";

{/* Components*/}
import FolderCard from './components/FolderCard'
import ProjectCard from './components/ProjectCard'
import ProjExpansion from "./components/ProjExpansion";
import Footer from './components/Footer'

{/* Icons*/}
import ChevronBottom  from './assets/Icons/ChevronBottom.svg';
import folderImage from './assets/FolderImage.png'

{/* Javascript*/}
import { toggle_element_visibility } from "./javascript/main";

const App = () => {

  {/* Reset page to default state function*/}
  function reset_page(){

    toggle_element_visibility([document.getElementById("back-button")])
    setDisplayInDetailProjectData(false)
    SetInDetailData([])
    setDisplayedProjectData([])
    setDisplayProjectCards(false)
    setDisplayedFolderData(portfolioData)
    setDisplayFolderCards(true)
  }

  {/* Variables*/}
  const [displayProjectCards,setDisplayProjectCards] = useState(false)
  const [displayFolderCards,setDisplayFolderCards] = useState(true)
  const [displayInDetailProjectData,setDisplayInDetailProjectData] = useState(false)
  const [inDetailData,SetInDetailData] = useState([])

  {/* Variables (Component data holders) */}
  const [displayedFolderData,setDisplayedFolderData] = useState(portfolioData)
  const [displayedProjectData,setDisplayedProjectData] = useState([])

  return (


    <div className='App'>

      <div className='landing'>
        <h1 id='welcomeBanner'>Usman Ishtiaq</h1>
          <p className="tag-line">Severely outdated website, I am available on linkedin at the bottom of the page.<br></br>
          <br></br>
          This website includes university projects.</p>

      </div>


      <a href="#project-section" >
            <img className='landing-chevron' id='LandingChevron' src={ChevronBottom} alt="Scroll Down" />
      </a>

     
      <div className='projects' id='project-section'>
        

        <h1 id='project-title'> PROJECTS</h1>
          {<button id='back-button' onClick={reset_page}>Back</button>}

          <div id='project-container'>
            
            {/* mapping the values in folder array to folder cards with a constant image and relative data */}
            {displayFolderCards &&
              displayedFolderData.map((folder,index) => <FolderCard key={index} folderName={folder.name} image={folderImage}
      
              onClick={()=>{
                toggle_element_visibility([document.getElementById("back-button")])
                //clicked a folder
                setDisplayFolderCards(false);
                if (folder.projectChildren) {
      
                  setDisplayProjectCards(true)
                  setDisplayedProjectData(folder.projectChildren);
                }
              }}

              />)

            }
           
           
          { displayProjectCards &&
            displayedProjectData.map((project,index) => <ProjectCard key={index} projectName={project.projectName} 
            image={project.image}
            completionText={project.completionText}
            description={project.description}
            visitLink={project.visitLink}
  
            onClick={()=> {setDisplayProjectCards(false)
              setDisplayInDetailProjectData(true)} } inDetailCallback={SetInDetailData}
            />)
            
          }

          { displayInDetailProjectData &&
            <ProjExpansion image={inDetailData.image} visitLink={inDetailData.link} 
            completionText={inDetailData.tagText} projectName={inDetailData.name} description={inDetailData.description}
            setProjectsVisible={setDisplayProjectCards}
            setProjectExpansionVisible={setDisplayInDetailProjectData}/>
          
          }
       
        </div>
       
      </div>
   

      <Footer/>
    </div>
   

    
  
  )
}

export default App