"use client"

export default function DeleteButton({ id, deletePost }: { id: number, deletePost: Function }) {
    return <button className="ml-1" onClick={() => deletePost(id)}>
        x
    </button>
}