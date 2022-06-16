import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloWorldApp} from './HelloWorldApp';
// import {FirstApp} from "./FirstApp";
import {CounterApp} from "./CounterApp";

import './style.css';



function App() {
    return (<h1>Hola mundo!!</h1>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/*<FirstApp/>*/}
         {/*<FirstApp title="Hola, Soy Vegeta" subtitle={123} />*/}
        <CounterApp value={10}/>
    </React.StrictMode>
)



