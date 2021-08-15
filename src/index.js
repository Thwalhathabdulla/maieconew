import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './asstes/scss/style.scss';
// import './asstes/plugis/plugin-bundle.css';
// import './asstes/plugis/plugin-bundle';
// import './asstes/script/app'
ReactDOM.render(
    <App />
  // <React.StrictMode>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
