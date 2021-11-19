import React, {useState} from "react";
import {projectsData} from '../data/projectsData';


const Projects = (props) => {
    // contient la liste de tout mes projets
    const [currentProject, setCurrentProject] = useState(projectsData);
    // je passe la valeur du props de la page des projets
    const project = currentProject[props.projectNumber];

    //cercle aleatoire
    //arrondi la valeur aleatoire de random
    let left = Math.floor(Math.random()*200 + 700) + "px"; //pour etre a droite
    let top = Math.floor(Math.random()*200 + 150) + "px"; // en bas
    let size = "scale(" + (Math.random() + 0.7) + ")"; // taille aleatoire entre 0 est 0.7

    return (
        <div className = "project-main">
            <div className= "project-content">
                {/* affichage des valeurs des props */}
                <h1>{project.title}</h1> 
                <p>{project.date}</p>
                {/* map du tab des langages */}
                <ul className = "languages">
                    {project.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className = "img-content">
                <div className = "img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                    </span>
                    <img src={project.img} alt = {project.title}></img>
                </div>
                <div className ="button-container">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
                        <span className = "button">Voir le site</span>
                    </a>
                </div>
            </div>
            <span className = "random-circle" style = {{left,top,transform:size}}></span>
        </div>
    );
};

export default Projects;