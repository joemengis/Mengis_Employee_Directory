import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import employeesReducer from '../reducers/employees';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    employees: employeesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;