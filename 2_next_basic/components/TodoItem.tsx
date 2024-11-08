"use client"

const STYLE = `border-2 border-black mx-1 p-1 drop-shadow-md rounded-md`

export default function TodoItem({ index, id, title, done, deleteTask }: {
    index: number;
    id: string;
    title: string;
    done: boolean;
    deleteTask: (id:string) => void; 
}) {
    return (
        <div key={id}>
            {index + 1}:
            {title}
            :
            {(done) ? "Yes" : "No"}
            <input 
                className={STYLE}
                type="checkbox" defaultChecked={done} />

            <button
                 className={STYLE}
                onClick={()=> deleteTask(id)}>delete</button>
        </div>)
}
