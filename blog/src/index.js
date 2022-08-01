import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider  } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './component/App';
import reducers from  './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
         <App />
    </Provider>);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//         </Provider>,
//         document.querySelector('#root')
// );