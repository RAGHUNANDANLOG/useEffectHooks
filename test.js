import React, {useState,useEffect} from 'react'
import useTitleCount from './useTitleCount';

const Test = () => {

    const [count, setCount] = useState(0);
    //custom hooks/component
    useTitleCount(count);

    // useEffect(()=>{
    //     console.log("I am fine");
    // }, []);
    
    console.log("Hello outside");
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>Click Test</button>
    </div>
  )
}

export default Test

