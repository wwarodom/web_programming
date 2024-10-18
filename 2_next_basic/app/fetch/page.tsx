// Task: print Image on you web site using avatar_url return by Github API

export default async function MyFetch() {

    const data = await fetch('https://api.github.com/users/wwarodom')
    const result = await data.json()
    console.log("Data: ", result)
    console.log("URL: ", result.avatar_url)

    if (!result) return <>...loading!!</>

    return (<>Hi Fetch
    
        <hr />
        {/* {posts.map((item) =>
            <>{item.id} | {item.title}</>
        )} */}
        <Image />
    </>)
}