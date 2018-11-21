import React from 'react';
import './Drawer.css';
import { Link } from '@reach/router';

const defaultLinks = [
  {
    id: 0,
    text: 'Home',
    href: '/'
  },
  {
    id: 1,
    text: 'Who we are',
    href: '/us'
  },
  {
    id: 2,
    text: 'Employee of the month',
    href: 'employee/0'
  }
];

function Drawer({ links = defaultLinks, handleClick }) {
  return (
    <div className="drawer">
      <div className="drawer__head">Menu</div>
      <div className="drawer__body">
        {links.map(link => (
          <Link
            key={link.id}
            onClick={() => handleClick()}
            className="menu__item"
            to={link.href}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Drawer;
