import React, { useState } from 'react';

import './Tabs.css';

export const TabList = ({ handleClick, setActive, ...props }) => {
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === props.active,
      setActive,
      childIndex: index
    });
  });
  return (
    <div className="tab-list" onClick={handleClick} {...props}>
      {children}
    </div>
  );
};

export const Tab = ({
  children,
  isActive,
  childIndex,
  setActive,
  ...props
}) => {
  return (
    <div
      className={`tab ${isActive ? 'tab__active' : 'tab__inactive'}`}
      onClick={() => setActive(childIndex)}
      {...props}
    >
      {children}
      <div
        className={
          isActive ? 'tab__active__underline' : 'tab__inactive__underline'
        }
      />
    </div>
  );
};

export const TabPanels = ({ active, children, ...props }) => {
  return (
    <div className="tab-panels" {...props}>
      {children[active]}
    </div>
  );
};

export const Panel = ({ children, ...props }) => {
  return (
    <div className="tab-panel" {...props}>
      {children}
    </div>
  );
};

export const PanelTitle = ({ children, ...props }) => {
  return <div className="tab-panel__title">{children}</div>;
};

export const PanelContent = ({ children, ...props }) => {
  return <div className="tab-panel__content">{children}</div>;
};

export default function Tabs(props) {
  const [active, setActive] = useState(0);
  const children = React.Children.map(props.children, child => {
    if (child.type === TabList) {
      return React.cloneElement(child, {
        active,
        setActive
      });
    }
    if (child.type === TabPanels) {
      return React.cloneElement(child, {
        active
      });
    } else {
      return child;
    }
  });
  return (
    <div className="tabs" {...props}>
      {children}
    </div>
  );
}
