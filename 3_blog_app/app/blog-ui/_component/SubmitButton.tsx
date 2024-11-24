"use client"
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom" 

export default function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus()
    return <Button  disabled={pending} type="submit">
        {pending ? "Submitting..." : label}
    </Button>
}