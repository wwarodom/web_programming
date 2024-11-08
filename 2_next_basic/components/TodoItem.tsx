export default function TodoItem({ index, id, title, done }: {
    index: number;
    id: string;
    title: string;
    done: boolean;
}) {
    return (
        <div key={id}>
            {index+1}: 
            {title}
            :
            {(done) ? "Yes" : "No"}
            <input type="checkbox" defaultChecked={done} />
        </div>)
}
