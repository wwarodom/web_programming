import Link from "next/link";

export default function Home() {
  return (<div className="min-h-64">
    <h1 className="text-3xl">Index page</h1> 
    <Link href="/product">Product</Link>
    </div>)
}