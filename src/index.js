import React from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import { BrowserRouter } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { Provider } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
