import React, {useEffect, useState} from 'react'

import '../styles/App.css';

const App = () => {

const [value,setValue]=useState(true)

const [className,setClassName]=useState('redColor')

const onButtonClick=()=>{

setValue(!value);

}

useEffect(()=>{

if(value){

setClassName('redColor')

}

if(!value){

setClassName('blueColor')

}

},[value])

return (

<div id="main">

<p className={className} >Newton School</p>

<button id='button' onClick={onButtonClick}>Change Style</button>

</div>

)

}

export default App;
