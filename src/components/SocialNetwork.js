import React from "react";

const SocialNetwork = () => {

    const anim = () => {
        let navLinks = document.querySelectorAll ('.social-network a');
        // animation d'attirance souris au survol des ancres
        navLinks.forEach(element => {
            //event sur chaque liens elements
            element.addEventListener('mouseover', (event) => {
                
                let attrX = event.offsetX -20;
                let attrY = event.offsetY - 13;
                // injecte le style dans mon element.
                element.style.transform = `translate(${attrX}px,${attrY}px)`;
            });
            //enleve le tranforme a la liberation de la souris.
            element.addEventListener ('mouseleave', () => {
                element.style.transform ='';
            });
        });
    }

    return(
        <div className = "social-network">
            <ul className = "content">
                {/* ancre lien */}
                <a href ="https://www.facebook.com" target = "_blank" 
                rel="noopener noreferrer" className = "hover" onMouseOver = {anim}> 
                    <li><i className ="fab fa-facebook-f"></i></li>
                </a>
                <a href ="https://www.twitter.com" target = "_blank" 
                rel="noopener noreferrer" className = "hover" onMouseOver = {anim}> 
                    <li><i className ="fab fa-twitter"></i></li>
                </a>
                <a href ="https://www.instagram.com" target = "_blank" 
                rel="noopener noreferrer" className = "hover" onMouseOver = {anim}> 
                    <li><i className ="fab fa-instagram"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork; 