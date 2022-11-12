// import React from 'react'
import {Component} from 'react'

import './App.css';

const Header = () =>{
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = "enter here";
//   const styledField = {
//     width: '300px'
//   };
 
//   return <input 
//           placeholder = {holder}
//           type = "text"
//           style={styledField}/>

// }

class Field extends Component {
render() {
  const holder = "enter here";
  const styledField = {
    width: '300px'
  };

return <input 
          placeholder = {holder}
          type = "text"
          style={styledField}/>
  }
}

function Btn() {
  const text = "log In";
  const logged = false;
  // const res = () => {
  //   return "log in"
  // }
  // const p  = <p>Log in</p>
  return <button>{logged ? "enter" : text}</button> // only ternar opera
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
