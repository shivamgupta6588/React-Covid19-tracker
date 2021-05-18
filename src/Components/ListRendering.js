import React from 'react'

function ListRendering() {
const NameList=[
    {
        id:'1',
        name:'shivam',
        age:'12'
    },
    {
        id:'2',
        name:'abc',
        age:'14'
    },
    {
        id:'3',
        name:'fati',
        age:'15'
    }
]

const persons=NameList.map(name=>(<h1> Id= {name.id} hello i am {name.name} of age {name.age}.</h1>))
    return (
        <div>
        {persons}
        </div>
    )
}

export default ListRendering
