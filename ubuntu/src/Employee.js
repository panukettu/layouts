import React, { useState, useEffect } from 'react';
import Header, { Title, Menu } from './components/Header';
import Body, { SubHeader } from './components/Body';
import Sidemenu from './components/Sidemenu';
import Api from './Api';
import { Link } from '@reach/router';

import './Employee.css';

function Employee({ employeeId }) {
  const [employee, setEmployee] = useState(null);

  useEffect(
    () => {
      Api.getEmployee(employeeId).then(employee => setEmployee(employee));
    },
    [employeeId]
  );

  const rotate = (element, deg, ...effects) => {
    effects.forEach(effect => effect());
    element.classList.toggle(`rotate${deg}`);
  };

  return (
    <>
      <Header>
        <Title>Employee</Title>
        <Menu />
      </Header>

      <Sidemenu handleClick={rotate} />
      <Body>
        <SubHeader>This guy works</SubHeader>
        {employee ? (
          <div className="employee">
            <div className="employee__title">
              <h2>{employee.name}</h2>
            </div>
            <div className="employee__body">
              <div className="employee__image">
                <img
                  width="100%"
                  height="100%"
                  src={employee.image}
                  alt={employee.name}
                />
              </div>
              <div className="employee__content">
                <p className="employee__quote">{employee.motto}</p>
              </div>
            </div>
            <div className="employee__browser">
              {employee.id > 0 && (
                <Link
                  className="employee__next"
                  to={`/employee/${parseInt(employeeId) - 1}`}
                >
                  <span role="img" aria-label="previous">
                    ⏪
                  </span>
                </Link>
              )}
              <Link
                className="employee__next"
                to={`/employee/${parseInt(employeeId) + 1}`}
              >
                <span role="img" aria-label="next">
                  {' '}
                  ⏩
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link
              className="employee__next"
              to={`/employee/${parseInt(employeeId) - 1}`}
            >
              <span role="img" aria-label="previous">
                ⏪
              </span>
            </Link>
            You?{' '}
          </div>
        )}
      </Body>
    </>
  );
}

export default Employee;
