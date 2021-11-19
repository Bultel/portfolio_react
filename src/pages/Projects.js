import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Projects from '../components/ProjectItems';

export const Project_1 = () => {
    return(
        <main>
        <div className ="project">
        <Navigation/>
            <Logo/>
            {/* Je luis passe en props le num du projet que je veut */}
            <Projects projectNumber = {0}/>
        <ButtonsBottom left={"/"} right={"/projet-2"}/>
        </div>
        </main>
    );
};

export const Project_2 = () => {
    return(
        <main>
        <div className ="project">
        <Navigation/>
            <Logo/>
            {/* Je luis passe en props le num du projet que je veut */}
            <Projects projectNumber = {1}/>
        <ButtonsBottom left={"/projet-1"} right={"/projet-3"}/>
        </div>
        </main>
    );
};

export const Project_3 = () => {
    return(
        <main>
        <div className ="project">
        <Navigation/>
            <Logo/>
            {/* Je luis passe en props le num du projet que je veut */}
            <Projects projectNumber = {2}/>
        <ButtonsBottom left={"/projet-2"} right={"/projet-4"}/>
        </div>
        </main>
    );
};

export const Project_4 = () => {
    return(
        <main>
        <div className ="project">
        <Navigation/>
            <Logo/>
            {/* Je luis passe en props le num du projet que je veut */}
            <Projects projectNumber = {3}/>
        <ButtonsBottom left={"/projet-3"} right={"/contact"}/>
        </div>
        </main>
    );
};