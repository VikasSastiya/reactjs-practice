import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [windowWidth,setwindowWidth] = useState(window.innerWidth)
  // const [items,setItems]=useState([])
  // console.log('render')

  //  useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //   .then(response => response.json())
  //   .then(json => setItems(json))
  // },[resourceType])
  const handleResize=()=>{
    setwindowWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',handleResize)
  
     return()=>{
      window.removeEventListener('resize',handleResize)
     }
  },[])
  return (
    <div>{windowWidth}
   {/* <div>
     <button onClick={()=>setResourceType('posts')}>Posts</button>  
     <button onClick={()=>setResourceType('users')}>Users</button>  
     <button onClick={()=>setResourceType('comments')}>Comments</button>  
     </div>
     <h1>{resourceType}</h1>
     {items.map(item=> {
      return <pre>{JSON.stringify(item)}</pre>
     })} */}
    </div>
  )
}

