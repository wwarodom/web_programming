"use client"
import { style } from "../constants/style"

export default function EditButton({ id, editPost }: { id: number, editPost: Function }) {
    return <button className={` ${style} border-0 absolute top-2 right-6`} onClick={() => editPost(id)}>
        edit |
    </button>
}