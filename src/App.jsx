import React from 'react'
import {useState} from 'react'
import './App.css'

function App() {

  const[counter, setCounter] = useState(0);

  const increment = () =>{
    setCounter(counter+1);
  };

  const decrement = () =>{
    if(counter === 0){
      alert("Counter can not be decrease value is : 0")
    } else{
      setCounter(counter-1);
    }
  };

  const reset = () =>{
    setCounter(0);
  };


  return (
    <>
    <div className='container'>
      <div className='display'>
        <h1>Counter</h1>
        <p>{counter}</p>
      </div>
        <div className='buttoncon'>
          <button onClick={increment}>INCREMENT</button>
          <button onClick={reset}>RESET</button>
          <button onClick={decrement}>DECREMENT</button>
        </div>
      </div>
    </>
  )
}

export default App
