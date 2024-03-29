import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, undefined, middlewares);

export default store;