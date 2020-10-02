import axios from 'axios';

export const loadEmployees = () => {
  return async (dispatch) => {
    try {
      const employees = await axios.get('./employees.json');
      console.log("employees are", employees.data);
      return dispatch(setEmployees(employees.data));
      
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setEmployees = (employees) => ({
  type: 'SET_EMPLOYEES',
  employees
});