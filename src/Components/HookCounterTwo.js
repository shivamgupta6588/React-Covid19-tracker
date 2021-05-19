import React ,{useState}from 'react'

function HookCounterTwo() {

    const [name, setname] = useState({firstName:'',lastName:''})
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setname({...name,firstName:e.target.value})}/>
            {/* //spread operatorin es6 for args */}
            <input type="text" value={name.lastName} onChange={e => setname({...name,lastName:e.target.value})}/>

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your lastname is {name.lastName}</h2>  
            <h2>{JSON.stringify(name)}</h2> 
            
        </div>
    )
}

export default HookCounterTwo
