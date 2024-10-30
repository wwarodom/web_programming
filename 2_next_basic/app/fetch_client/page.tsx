// Task: print Image on you web site using avatar_url return by Github API
'use client'

// import Image from 'next/image'
import { useEffect, useState } from 'react'

type PostType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: Date,
    category: string, 
}

export default function MyFetch() {

    // const [url, setUrl] = useState('')
    const [data, setData] = useState<PostType[]>()

    useEffect(() => {
        async function getData() {
            try {
                // const data = await fetch('https://api.github.com/users/wwarodom')
                const result = await fetch('/api/vercel')
                const data2 = await result.json()
                console.log("Data: ", data2) 
                setData(data2)
                // setUrl(result.avatar_url)
            }
            catch(error) {
                console.error("Error: ",error)
            }      
        }
       getData()
    }, [])
  
    if (!data) return <>...loading!!</>

    return (<>Hi Fetch

        <hr />
        {/* {JSON.stringify(data)} */}

        {data.map((item) =>
            <div key={item.id}>{item.id} | {item.title} | {item.content} </div>
        )}
        {/* <Image src={url}
            height={200} width={200}
            alt="My Pic" /> */}
    </>)
}