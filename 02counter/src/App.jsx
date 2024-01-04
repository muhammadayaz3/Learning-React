import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  function AddValue() {
    if(counter<20){
      setCounter(counter+1);
    }
  }
  function PreviousValue() {
    if(counter>0){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Vite React | {counter}</h1>
        <button onClick={AddValue}>Plus value {counter}</button>
        <button onClick={PreviousValue}>Previous value {counter}</button>
    </>
  )
}

export default App
