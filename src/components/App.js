import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
const [changeColor,setChangeColor]=useState(false);
  const handleClick=()=>{
  setChangeColor(!changeColor)
  }
  return (
    <div id="main">
      <p className={`${(changeColor===true)?'blueColor':'redColor'}`} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
