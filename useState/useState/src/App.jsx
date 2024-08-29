import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [count,setCount]=useState(()=> {
    console.log('run function')
    return 4
   })
   
   function decrementCount(){
    setCount(prevCount=>prevCount-1)
    // setCount(count-1)
    // setCount(count-1)
     
   }
   function incrementCount(){
    setCount(prevCount=>prevCount+1)
   }
  return (
    <>
     <button onClick={decrementCount}>-</button>
      <span>{count}</span>
     <button onClick={incrementCount}>+</button>
       
         </>
  )
}

export default App
