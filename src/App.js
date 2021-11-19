import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Homes';
import {Project_1,Project_2,Project_3,Project_4} from './pages/Projects';

const App = () => {
  return (
    // permet d'avoir mes pages
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/projet-1" component = {Project_1}/>
        <Route exact path="/projet-2" component = {Project_2}/>
        <Route exact path="/projet-3" component = {Project_3}/>
        <Route exact path="/projet-4" component = {Project_4}/>
        <Route exact path="/contact" component = {Contact}/>
        {/* redirect sert a mettre sur la page homme en cas de fausse route */}
        <Redirect to=  "/"/> 
      </Switch>
  );
};

export default App;