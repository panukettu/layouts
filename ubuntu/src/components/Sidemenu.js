import React from 'react';

const Sidemenu = ({ handleClick }) => {
  function toggleSideMenu() {
    const sideMenu = document.querySelector('.side-menu__body');
    const container = document.querySelector('.content');
    sideMenu.classList.toggle('side-menu__body--visible');
    container.classList.toggle('dimmed');
  }

  return (
    <div className="side-menu">
      <div className="side-menu__head">
        <h3
          className="side-menu__button"
          onClick={e => handleClick(e.currentTarget, 450, toggleSideMenu)}
        >
          <span role="img" aria-label="asd">
            👉
          </span>
        </h3>
      </div>
      <ol className="side-menu__body">
        <li className="menu__item">
          <span role="img" aria-label="damn">
            💖
          </span>
        </li>
        <li className="menu__item">
          <span role="img" aria-label="damn">
            🍜
          </span>
        </li>
        <li className="menu__item">
          <span role="img" aria-label="damn">
            🎶
          </span>
        </li>
        <li className="menu__item">
          <span role="img" aria-label="damn">
            🔨
          </span>
        </li>
        <li className="menu__item" href="">
          <span role="img" aria-label="damn">
            🏆
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Sidemenu;
