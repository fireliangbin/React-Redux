/**
 * Created by EdenLiang on 2016/1/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import index from './js/reducers'
import App from './js/Containers/App'

const store = createStore(index);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('content'));

