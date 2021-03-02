import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {addNewPost, handleChangePost} from './redux/state';
import state, {subscribe} from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App state={state} addPost={addNewPost} changePost={handleChangePost} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
