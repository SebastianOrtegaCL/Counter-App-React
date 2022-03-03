import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
import './index.css';
// import PrimeraApp from './PrimeraApp';




const divRoot = document.querySelector('#root');
// document.body.append(saludo);

ReactDOM.render(<CounterApp value={0} />, divRoot)  



