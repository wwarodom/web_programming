"use client"

import { useFormState } from "react-dom"
import login from "@/app/blog/_actions/login"
import Link from "next/link"
import { redirect } from "next/navigation"
import SubmitButton from "../_component/SubmitButton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label" 
import { style } from "@/app/blog/constants/style"
import { Button } from "@/components/ui/button"
import Nav from "../_component/Nav"

export default function Login() {
    const [data, action] = useFormState(login, {})

    if (data.message)
        redirect("/blog-ui")
    
    return (
        <>
            <Nav/> 
            
            <div className="mt-16 font-bold text-2xl">Login</div>
            <hr />
            <form action={action} className="mt-4">
                <div className="flex flex-col mb-4 gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input className={style} type="email" name="email" id="email" placeholder="Email" />
                    {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
                </div> 

                <div className="flex flex-col mb-4 gap-1.5"> 
                    <Label htmlFor="password">Password</Label>
                    <Input className={style}  type="password" name="password" id="password" placeholder="password" required />
                    {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
                </div>
                <div className="flex items-center mb-4">
                    <Input className="w-4 h-4 border-2 mr-2" type="checkbox" name="remember" id="remember" />
                    <Label className="align-top" htmlFor="remember">Remember me</Label>
                </div>
                <div>
                    {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
                </div>
                <div>
                    {data.message ? <p>{data.message}</p> : <SubmitButton label="Login" />}
                </div>
            </form>
            <br /><hr /> <br />
            <Link href="/blog-ui"><Button>Back</Button></Link>
        </>
    )
}