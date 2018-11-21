import React from 'react';
import MenuBtn from './MenuBtn.js';

function DrawerLink({ handleClick }) {
  function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.classList.toggle('drawer-visible');
  }

  return (
    <div className="drawer-link">
      <MenuBtn
        onClick={e => handleClick(e.currentTarget, 90, toggleDrawer)}
        className="drawer-link__button"
        style={{ fill: 'white', width: '50px', height: '50px' }}
        circle={{ fill: 'white', opacity: '0.85' }}
        outer={{ fill: 'black' }}
      />
    </div>
  );
}
export default DrawerLink;
