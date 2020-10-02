/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadEmployees } from '../actions/employees';
import EmployeeList from './EmployeeList';
import Header from './Header';
import Filters from './Filters';

const HomePage = (props) => {
  const [employees, setEmployees] = useState(props.employees);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  // call api to get list of users
  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadEmployees());

    // initialize debounce function to search once user has stopped typing every half second
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.employees.length > 0) {
      setEmployees(props.employees);
      setIsLoading(false);
    }
  }, [props.employees]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.employees.filter((employee) =>
        employee.country.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.employees;
    }
    setEmployees(filtered);
    setSortOrder('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSortName(sortOrder) {
      setSortOrder(sortOrder);
      if (sortOrder.value) {
          setEmployees(_.orderBy(employees, ['name'], [sortOrder.value]));
      }
  }

  return (
    <React.Fragment>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSortName} sortOrder={sortOrder} />
      <EmployeeList employees={employees} isLoading={isLoading} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees
});

export default connect(mapStateToProps)(HomePage);