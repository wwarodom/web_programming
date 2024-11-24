"use client"
import { useFormState } from "react-dom"
import register from "@/app/blog/_actions/register"
import Link from "next/link"
import SubmitButton from "../_component/SubmitButton"
import { redirect } from "next/navigation"
import { style } from "@/app/blog/constants/style"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Nav from "../_component/Nav"

export default function Register() {
    const [data, action] = useFormState(register, {})

    if (data.message) {
        redirect("/blog-ui")
    }

    return (
        <div>
            <Nav />

            <div className="mt-16 font-bold text-2xl">Register</div>

            <hr />
            <form action={action} className="mt-4">
                <div className="flex flex-col mb-4 gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input className={style} type="email" name="email" id="email" placeholder="email" required />
                    {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
                </div>
                <div className="flex flex-col mb-4 gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input className={style} type="text" name="name" id="name" placeholder="name" required />
                    {data.error?.name && <div className="text-red-600">{data.error?.name[0]}</div>}
                </div>
                <div className="flex flex-col mb-8 gap-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input className={style} type="password" name="password" id="password" placeholder="password" required />
                    {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
                </div>
                <div>
                    {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
                </div>
                <div>
                    {data.message ? <p>{data.message}</p> : <SubmitButton label="Register" />}
                </div>
            </form>
            <br /><hr /> <br />
            <Link href="/blog-ui"><Button>Back</Button></Link>
        </div>
    )
}