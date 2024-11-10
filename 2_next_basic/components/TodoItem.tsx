"use client"

import Link from "next/link";
import STYLE from "../constants/style"

export default function TodoItem({ index, id, title, done, deleteTask, toggleTask }: {
    index: number;
    id: string;
    title: string;
    done: boolean;
    deleteTask: (id: string) => void;
    toggleTask: (id: string, done: boolean) => void;
}) {
    return (
        <div key={id}>
            {index + 1}:
            {title}
            <input
                className={STYLE}
                type="checkbox" defaultChecked={done}
                onClick={() => toggleTask(id, !done)}
            />

            <button
                className={STYLE}
                onClick={() => deleteTask(id)}>delete</button>

            <Link 
                className={STYLE}
                href={{
                pathname: '/sample_db/edit',
                query: { id, title },
            }} >Edit</Link>
        </div>)
}
