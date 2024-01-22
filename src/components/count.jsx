import { set } from 'draft-js/lib/EditorState'
import React, { useState } from 'react'



function Count() {
    const [count, setCount] = useState(0)
    // console.log(count)
    return (
        <>
            <div>{count}</div>

            <button
                onClick={() => setCount(count + 1)}
            >click me</button>
        {
            console.log(setCount)
        }

        </>

    )
}

export default Count