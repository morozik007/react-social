import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

let postsData = [
  { id: 1, likesCount: 1, message: "Первый нах!" },
  { id: 2, likesCount: 21, message: "Второй нах!" },
  { id: 3, likesCount: 133, message: "Очень длинный текст" },
  { id: 4, likesCount: 34, message: "авароларфарфаофр" },
];

let dialogsData = [
  { id: 1, name: 'Andrey 1'},
  { id: 2, name: 'Andrey 2'},
  { id: 3, name: 'Andrey 3'},
  { id: 4, name: 'Andrey 4'},
  { id: 5, name: 'Andrey 5'},
  { id: 6, name: 'Andrey 6'},
];

let messagesData = [
  { id: 1, message: "Yooooo Hooooo!" },
  { id: 2, message: "Hiii!" },
  { id: 3, message: "Loool!" },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
