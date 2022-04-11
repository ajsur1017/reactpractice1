import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

const Example = () => <h1>Hello, I am the example function, coming from index.js</h1>
const Example2 = <h1>Hello, I am the example variable, coming from index.js</h1>

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <Example />
      {Example2}
      {"data can also be injected this way using JSX"}
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
