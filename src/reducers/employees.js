const employeesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EMPLOYEES':
        return [...state, ...action.employees];
      default:
        return state;
    }
  };
  
  export default employeesReducer;