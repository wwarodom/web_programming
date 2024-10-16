'use client'
import { useParams } from "next/navigation"

export default function CC() {
    const params = useParams();
    return <>{params.slug}</>
}