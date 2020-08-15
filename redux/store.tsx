import { createStore } from 'redux';

import reducer from './reducer';
import { addUser } from './actions';

const store = createStore(reducer);

store.dispatch(addUser({ name: 'Joanna', id: 1 }));
store.dispatch(addUser({ name: 'Artur', id: 2 }));

export default store;
