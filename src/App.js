import React , { useEffect, useState } from 'react'
import './App.css';
function App() {
    const [count,setCount] = useState(0)
    const[color,setColor] = useState('red')
    useEffect(() =>{
        document.title = `You claicked ${count} times`
    },[count])
  return (
    <div className="App">
      <button onClick={()=>{
          setCount(count+1)
      }}>+</button>
      {count}
      <button onClick={() =>{
          setCount(count-1)
      }}>-</button>
     <button onClick={() =>{
         setColor("Pink")
     }}>Color</button>
      <p> {color} </p>
    </div>
  );
} 

export default App;
