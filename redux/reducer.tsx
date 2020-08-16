import { combineReducers } from 'redux';

import { Action, Actions } from './actions';
import { User, Payment } from './interfaces';

const paymentReducer = (state: Payment[] = [], action: Action<Payment>) => {
  if (action.type === Actions.ADD_PAYMENT) {
    // Pretend adding the same payment with the same id
    if (!state.filter((payment) => payment.id === action.payload.id).length) {
      return [...state, action.payload];
    }
  }
  return state;
};

const userReducer = (state: User[] = [], action: Action<User>) => {
  if (action.type === Actions.ADD_USER) return [...state, action.payload];
  return state;
};

const reducer = combineReducers({
  payment: paymentReducer,
  user: userReducer,
});

export default reducer;
