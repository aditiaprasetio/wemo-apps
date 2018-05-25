// import { createStore } from 'redux';
// import reducers from '../reducers';

// const store = createStore(reducers);

// export default store;

import {createStore, applyMiddleware} from 'redux';  
import reducers from '../reducers';  
import thunk from 'redux-thunk';

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;