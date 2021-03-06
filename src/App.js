import React from 'react';

import NavbarHeading from './components/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Services from './components/pages/Services';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavbarHeading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
