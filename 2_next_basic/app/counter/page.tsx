'use client'

import { useState } from "react"
export default function Counter() {

    const [num, setNum] = useState(1) // React hook

    function add() { 
        setNum(num+1)
        console.log("Num: ", num)
    }
    return (<>
        <h1> Counter: {num} </h1>
        <button
            className="border-2 border-black p-2"
            onClick={add}
        >+
        </button>
        <button
            className="border-2 border-black p-2 ml-2"
            onClick={() => (setNum(num-1))}
        >-
        </button>
        <button
            className="border-2 border-black p-2 ml-2"
            onClick={() => (setNum(0))}
        >0
        </button>
    </>) //JSX
}