import { createStore } from 'redux';

import reducer from './reducer';
import { addUser, addPayment } from './actions';

const store = createStore(reducer);

export const initStore = (): Promise<void> =>
  new Promise((resolve, reject) => {
    Promise.all([getPayments(), getUsers()]).finally(() => {
      resolve();
    });
  });

export const getPayments = (): Promise<void> =>
  new Promise((resolve, reject) => {
    store.dispatch(
      addPayment({
        id: 1,
        userId: 2,
        value: 12.2,
        comment: 'Biedronka',
        date: '2020-02-12',
      })
    );
    store.dispatch(
      addPayment({
        id: 2,
        userId: 1,
        value: 22.2,
        comment: 'Lewiatan',
        date: '2020-02-13',
      })
    );
    store.dispatch(
      addPayment({
        id: 2,
        userId: 1,
        value: 22.2,
        comment: 'Lewiatan',
        date: '2020-02-13',
      })
    );
    resolve();
  });

export const getUsers = (): Promise<void> =>
  new Promise((resolve, reject) => {
    store.dispatch(addUser({ name: 'Joanna', id: 1 }));
    store.dispatch(addUser({ name: 'Artur', id: 2 }));
    resolve();
  });

export default store;
