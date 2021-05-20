import React,{useState,useEffect} from 'react'



function UseHookEffect() {
    const intcoiunt=0
const [count, setCount] = useState(intcoiunt)

useEffect(()=>{
    document.title=`You Clicked button ${count} times`
})
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>{count}</button> 
        </div>
    )
}

export default UseHookEffect
