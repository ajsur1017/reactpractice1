import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Example = () => <h1>Hello, I am the example function</h1>
const Example2 = <h1>Hello, I am the second example variable</h1>

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Example />
    {Example2}
    {"data can be injected also this way"}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
