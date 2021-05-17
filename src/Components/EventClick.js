import React from 'react'

function EventClick() {


    function clickme()
    {console.log("button is clicked")}
    return (
        <div>
            <button onClick={clickme}>click me</button>
        </div>
    )
}

export default EventClick
