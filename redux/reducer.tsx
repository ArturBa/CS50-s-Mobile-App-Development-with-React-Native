import { combineReducers } from 'redux';

import { Action, Actions } from './actions';
import { User, Payment } from './interfaces';

const paymentReducer = (state = [], action: Action<Payment>) => {
  if (action.type === Actions.ADD_PAYMENT) return [...state, action.payload];
  return state;
};

const userReducer = (state = [], action: Action<User>) => {
  if (action.type === Actions.ADD_USER) return [...state, action.payload];
  return state;
};

const reducer = combineReducers({
  payment: paymentReducer,
  user: userReducer,
});

export default reducer;
