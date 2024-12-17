import React from "react";
import { useState } from "react";


const Content = () => {
    function namechange(){
      // const [name,setName]=useState('karan');
        const names=['karan','rithan','hari','ezhil'];
        const change=Math.floor(Math.random()*4);
        return names[change];
    }

    const [count,setCount]=useState(99)
    function decrementfunc(){
      if(count>50){
        setCount(prevcount => prevcount-1)
    }
  }
    function incrementfunc(){
      if(count<150){
      setCount(prevcount => prevcount+1)
  }
}
  return (
    <main>
    <p> Lets start with {namechange}</p>
    <button>Swap</button>
    <button onClick={decrementfunc}>-</button>
    <span>{count}</span>
    <button onClick={incrementfunc}>+</button>
    </main>
  )
}

export default Content