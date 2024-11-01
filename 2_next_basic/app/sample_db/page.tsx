import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";

export default async function Page() {

    // const title = "My Test title "
    // await prisma.todo.create({ data: { title, done: false } })

    // const data = await prisma.todo.findFirst();
    const data = await prisma.todo.findMany();
    console.log(data)

    async function createTask(formData: FormData){
        "use server"
        const title = formData.get("title") as string
        await prisma.todo.create({ data: { title, done: false } })
        revalidatePath('/simple_db')
    }

    return (
        <div>
            <h1>Sample DB</h1>
            {/* {JSON.stringify(data) } */}
            <div>
                {data.map( (item) => (
                    <div key={item.id}>{item.title} 
                    : 
                    {(item.done)?"Yes":"No"}
                    </div>
                ))}
            </div>

            <hr />
            <div>
                <h2>Add task</h2>
                <form action={createTask}>
                    <input className="border-2 border-black" type="text" name="title" />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
