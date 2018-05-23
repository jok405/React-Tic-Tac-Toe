import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'redux-react';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';


const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.bookwormJWT) {
    const user { token: localStorage.bookwormJWT };
    store.dispatch(userLoggedIn(user));
} 

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
