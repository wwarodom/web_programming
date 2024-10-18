// Task: print Image on you web site using avatar_url return by Github API
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MyFetch() {

    const [url, setUrl] = useState('')

    useEffect(() => {
        async function getImage() {
            const data = await fetch('https://api.github.com/users/wwarodom')
            const result = await data.json()
            console.log("Data: ", result)
            console.log("URL: ", result.avatar_url)
            setUrl(result.avatar_url)
        }
       getImage()
    }, [])
 

    if (!url) return <>...loading!!</>

    return (<>Hi Fetch

        <hr />
        {/* {posts.map((item) =>
            <>{item.id} | {item.title}</>
        )} */}
        <Image src={url}
            height={200} width={200}
            alt="My Pic" />
    </>)
}