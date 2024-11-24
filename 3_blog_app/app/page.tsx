import Link from "next/link";

export default function Home() {
  return (<>
    <h1>My Blog App</h1> 
    <hr />
    <ul className="list-disc"> 
      <li> <Link href="/blog">Blog</Link></li> 
      <li> <Link href="/blog-ui">Blog-UI</Link></li> 
    </ul>
  </>)
}