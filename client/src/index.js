import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import App from './components/App/App';
import { unregister } from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import authReducer from './store/reducers/authReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authReducer, composeEnhancers(applyMiddleware(reduxThunk)));

unregister();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

