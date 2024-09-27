import Link from 'next/link'
import Image from 'next/image'
export default function Foo() {
  return (
    <div>
        <div className='flex justify-center border-black 
                        border-2 text-4xl mb-4 p-4' >Foo</div> 
        <Link href="/">Back home</Link>
        <Image 
            src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
            width={200}
            height={200}
            alt="Picture of the computer"
        />
    </div>
  )
}
