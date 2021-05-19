import React ,{useState}from 'react'

function HookCounter() {
    const initialcount=0
    const [count, setCount] = useState(initialcount)
    return (
        <div>
            count:{count}
            <button onClick={()=>setCount(initialcount)}>reset</button>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(prevcount=>prevcount-1)}>decrement</button> // for previous state examples
        </div>
    )
}

export default HookCounter
