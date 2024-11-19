"use client"
import { useFormStatus } from "react-dom"
import {style} from "../constants/style"

export default function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus()
    return <button className={style} disabled={pending} type="submit">
        {pending ? "Submitting..." : label}
    </button>
}