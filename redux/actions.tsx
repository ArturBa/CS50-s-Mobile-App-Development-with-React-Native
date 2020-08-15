import { User, Payment } from './interfaces';

// action types
export enum Actions {
  ADD_PAYMENT,
  ADD_USER,
}

export interface Action<T> {
  type: Actions;
  payload: T;
}

// action creators
export const addPayment = (update: Payment) => ({
  type: Actions.ADD_PAYMENT,
  payload: update,
});

export const addUser = (update: User) => ({
  type: Actions.ADD_USER,
  payload: update,
});
