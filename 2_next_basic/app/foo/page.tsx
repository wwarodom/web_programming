import Link from 'next/link'
import Image from 'next/image'
export default function Foo() {
  return (
    <div>
        Foo
        <Link href="/">Back home</Link>
        <Image 
            src="https://www.bnn.in.th/_nuxt/img/site-logo.9ca15bd.svg"
            width={200}
            height={200}
            alt="Picture of the computer"
        />
    </div>
  )
}
