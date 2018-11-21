import React from 'react';

import DrawerLink from './components/DrawerLink';
import { Router } from '@reach/router';
import About from './About';
import Home from './Home';
import './Main.css';
import Employee from './Employee';

function Main() {
  const rotate = (element, deg, ...effects) => {
    effects.forEach(effect => effect());
    element.classList.toggle(`rotate${deg}`);
  };

  return (
    <>
      <DrawerLink handleClick={rotate} />
      <Router className="main">
        <Home path="/" />
        <Employee path="employee/:employeeId" />
        <About path="us" />
      </Router>
    </>
  );
}

export default Main;
