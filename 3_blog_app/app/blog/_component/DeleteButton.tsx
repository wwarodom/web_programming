"use client"
import { style } from "../constants/style"

export default function DeleteButton({ id, deletePost }: { id: number, deletePost: Function }) {
    return <button className={` ${style} border-indigo-50 absolute top-2 right-2`} onClick={() => deletePost(id)}>
        x
    </button>
}