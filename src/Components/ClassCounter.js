import React,{useState} from 'react'

export default function ClassCounter() {

    const[count,setCount]=useState(5);
        return (
        <div>
            <button onClick={()=>setCount(count*2)}>click{count}</button>
            
        </div>
    )
}
