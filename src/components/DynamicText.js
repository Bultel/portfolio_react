import React, {useEffect}from "react";

const DynamicText = () => {
    //permet de jouer toute la boucle quand le component est montée
        let word = ["simple", "clear","smart","strong"]; // mes mots
        let wordIndex = 0; // index des mots
        let letterIndex = 0; // index des lettres de chaque mots
    useEffect(() => {
        const target = document.getElementById("text-target");
        //a chaque fois que cette fonction est appelé, elle creer une nouvelle lettre
        const createLetter = () => {
            const letter = document.createElement ("span"); // crée un span pour chaque lettre
            target.appendChild(letter); // ajoute cet elements dans le texte a afficher.

            letter.classList.add("letter"); // ajoute la class letter
            letter.style.opacity = "0"; // met une opacité de 0, c'est l'animation qui revele les lettres
            letter.style.animation = "anim 5s ease forwards"; // met une anim
            letter.textContent = word[wordIndex][letterIndex]; // ajoute le texte dans le span letter 

            setTimeout (()=>{   // enleve les lettres toutes les 2 secs
                letter.remove();
            },2000);
        };

        const appearLetter = () => {
            setTimeout(()=> { // crée une lettre tout les 8 cts 
                if (wordIndex >= word.length) { // si sup a la liste de mot
                    wordIndex = 0; // retourne l'index a 0
                    letterIndex = 0; // retourne l'index a 0
                    appearLetter(); //relance la boucle
                }else if (letterIndex < word[wordIndex].length){ // si il reste des lettres dans l'index du mot
                    createLetter (); // crée une lettre 
                    letterIndex++; // prend celle d'apres
                    appearLetter(); // relance la boucle
                }else{
                    letterIndex = 0; //repasse a 0 pour la premiere lettre
                    wordIndex++; // change de mot
                    setTimeout(()=> { // declanche l'apparition au bout de 2 sec
                        appearLetter();
                    },2000);
                };
            },80);
        };
        appearLetter();
    },[]);

    return(
        <span className = "dynamic-text">
            <span className = "simply">simply</span>
            {/* texte qui arrive de facon dynamique par l'id target */}
            <span id = "text-target"></span>
        </span>
    );
};

export default DynamicText;