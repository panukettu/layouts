import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const renderDefaultMenu = () => (
  <>
    <MenuItem>
      <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/employee/0">Employees</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/us">About us</Link>
    </MenuItem>
  </>
);

export const Title = ({ children }) => (
  <div className="header__title">{children}</div>
);

export const Menu = ({ renderDefault = true, children }) => {
  return (
    <div className="menu">
      {children}
      {renderDefault && renderDefaultMenu()}
    </div>
  );
};

export const MenuItem = ({ children, ...props }) => {
  return (
    <div className="menu__item" {...props}>
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return <div className="header">{children}</div>;
};

Header.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
};

export default Header;
