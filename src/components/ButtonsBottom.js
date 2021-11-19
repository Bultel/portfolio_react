import React from "react";
import { NavLink } from "react-router-dom";


// a chaque fois que ce component est appellé, on lui pass une props
const ButtonsBottom = (props) => {

return(
    <div className ="scroll-bottom">
        <div className = "sb_main">
            {props.left && (  // si props.left est true alors
            //  si true alors tu nous enmene a la props que l'on ta passé
                <NavLink to = {props.left} className = "left">
                    {/* fleche  */}
                    <span>&#10092;</span> 
                </NavLink>
            )}
            {props.right && (  // si props.left est true alors
            //recupere la valeur de right dans Home
                <NavLink to = {props.right} className = "right"> 
                    {/* fleche  */}
                    <span>&#10093;</span> 
                </NavLink>
            )}
        </div>
    </div>
);

};


export default ButtonsBottom;
