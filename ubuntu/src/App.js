import React from 'react';
import './App.css';

import Drawer from './Drawer';
import Main from './Main';

function App() {
  function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.classList.toggle('drawer-visible');
  }

  return (
    <div className="root">
      <Drawer handleClick={toggleDrawer} />
      <Main />
    </div>
  );
}

export default App;
