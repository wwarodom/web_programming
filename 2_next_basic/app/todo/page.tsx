// define JSON object (tasks[]) consists of
// id, name, time 

'use client'

import { useState } from "react"

const tasks = [
    { id: 1, name: "Read a book", time: 20 },
    { id: 2, name: "write a program", time: 40 },
    { id: 3, name: "Sleep is the best", time: 90 },
]

// show tasks on the browser

export default function Todo() {
    // Create 2 state variables called 'name' , 'time'  
    const [name, setName] = useState('')
    const [time, setTime] = useState(0)

    // javascript tradition function
    function foo1() {
        return "foo1"
    }

    // anonynous function
    const foo2 = function () {
        return "foo2"
    }
    // arrow function
    const foo3 = () => {
        return "foo3"
    }
    const foo4 = () => "foo4"

    console.log(`${foo1() + foo2() + foo3() + foo4()}`)

    return <>
        <h1>Todo</h1>
        <ul>
            {tasks.map((item) =>
                <li key={item.id}>
                    {item.name} : {item.time}
                </li>)}
        </ul>
        <br />
        <hr />
        {/* Create 2 input textbox for name & time */}
        <h1>Add task</h1>
        Name: {name} <br />
        Time: {time} <br />
        <input
            className="border-2 border-black m-1 text-xl"
            onChange={(e) => setName(e.target.value)}
            type="text"
        />
        <br />
        <input
            className="border-2 border-black m-1 text-xl"
            onChange={(e) => setTime(+e.target.value)}
            type="number"
        />
    </>
}