import React from 'react';
import ReactDOM from 'react-dom';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Sidebar from './components/sidebar';
import Store from './pages/store';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Cadastro /> */}
    {/* <Checkout /> */}
    <Sidebar />
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
