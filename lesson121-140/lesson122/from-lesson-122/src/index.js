import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello world!</h2>;

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');
const text = "hello World";
//
const elem = (
  <div>
    <h2 className='text'>{text}</h2>  
    <input type = 'text' />
    <label htmlFor=''></label>
    <button tabIndex='0'>Click</button>
  </div>
);// class and for already reserved so we use ClassName and HtmlFor

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);



