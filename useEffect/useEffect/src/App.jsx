import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
   const [resourceType,setResourceType] = useState('posts')
   
  // const [windowWidth,setwindowWidth] = useState(window.innerWidth)
  // const [items,setItems]=useState([])
  // console.log('render')

   useEffect(()=>{
    console.log('resource changed')
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    // .then(response => response.json())
    // .then(json => setItems(json))
    return()=> {
      console.log('return from resource change')
    }
  },[resourceType])
  // const handleResize=()=>{
  //   setwindowWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  //   window.addEventListener('resize',handleResize)
  
  //    return()=>{
  //     window.removeEventListener('resize',handleResize)
  //    }
  // },[])
  return (
    <>
    {/* <div>{windowWidth} */}
   <div>
     <button onClick={()=>setResourceType('posts')}>Posts</button>  
     <button onClick={()=>setResourceType('users')}>Users</button>  
     <button onClick={()=>setResourceType('comments')}>Comments</button>  
     </div>
     <h1>{resourceType}</h1>
     {/* {items.map(item=> {
      return <pre>{JSON.stringify(item)}</pre>
     })} */}
    {/* </div> */}
    </>
  )
}

// In React, rerendering refers to the process where a component updates and redraws its UI. This happens when:

// State Changes: If the state of a component changes (using useState, setState, etc.), React will trigger a rerender to update the UI to reflect the new state.

// Props Changes: When the props passed to a component change, React will rerender the component to reflect the new data.

// Parent Rerenders: If a parent component rerenders, its child components may also rerender, depending on how the component is structured.

// When Rerendering Occurs
// Rerendering is crucial for keeping the UI in sync with the data. However, unnecessary rerendering can lead to performance issues. React employs a "virtual DOM" to efficiently manage rerendering by comparing the current DOM state with the previous one (a process called "reconciliation") and only applying the necessary updates.

// Controlling Rerendering
// React.memo: For functional components, you can wrap them in React.memo to prevent rerendering unless the props change.
// shouldComponentUpdate: For class components, you can use this lifecycle method to control whether a component should rerender.
// useCallback and useMemo: These hooks help optimize performance by memoizing functions and values, preventing unnecessary rerenders.
// Understanding when and why rerendering happens is key to optimizing React applications and ensuring smooth user experiences.