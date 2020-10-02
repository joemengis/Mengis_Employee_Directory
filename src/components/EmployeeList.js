import React from 'react';
import EmployeeItem from './EmployeeItem';

const EmployeesList = ({ employees, isLoading }) => {
  return (
    <div className="employees-list">
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {employees.map((employee, index) => (
            <EmployeeItem key={index} {...employee} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default EmployeesList;