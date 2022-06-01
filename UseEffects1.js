import React, {useState} from 'react'
import useTitleCount from './useTitleCount';

const UseEffects1 = () => {

    const [count, setCount] = useState(0);
    //custom hooks
    useTitleCount(count);

    // useEffect(()=>{
    //     console.log("I am fine");
    // }, []);
    
    console.log("Hello outside");
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default UseEffects1
