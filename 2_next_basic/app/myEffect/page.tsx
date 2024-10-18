'use client'

import { useState, useEffect } from "react"

export default function MyEffect() {

    const [a, setA] = useState("a")
    const [b, setB] = useState("b")

    useEffect( () => {
        console.log("In side useEffect")
        return () => console.log("Clean up ...")
    } , []  )
  
    useEffect( () => {
        console.log("In side useEffect")
        return () => console.log("Clean up ...")
    } , []  )

    console.log("render")

  return (
    <div>
        UseEffect: {a} | {b} <br /> <hr />
        <button className="border-2 p-2 m-2" onClick={()=>setA("A")}>A</button>
        <button className="border-2 p-2 m-2" onClick={()=>setA("a")}>a</button>
        <button className="border-2 p-2 m-2" onClick={()=>setB("B")}>B</button>
        <button className="border-2 p-2 m-2" onClick={()=>setB("b")}>b</button>
    </div>
  )
}
