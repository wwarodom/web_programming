import Link from "next/link";

export default function Home() {
  return (<>
    <h1>My App</h1> 
    <hr />
    <ul className="list-disc"> 
      <li> <Link href="/blog">Blog</Link></li> 
    </ul>
  </>)
}