import { createStore} from 'redux';
import chatReducers from '../reducers';

const store = createStore(
    chatReducers
);

export default store;