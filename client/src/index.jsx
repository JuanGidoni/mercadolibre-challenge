import React from 'react';
import ReactDOM from 'react-dom';
import './components/templates/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
