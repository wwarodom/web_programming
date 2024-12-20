import TodoItem from "@/components/TodoItem";
import prisma from "@/utils/db"
import { revalidatePath } from "next/cache";
import STYLE from "../../constants/style"

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

    async function deleteTask(id: string) {
        "use server"
        await prisma.todo.delete( { where: {id}} )
        revalidatePath("/sample_db")
    }

    async function toggleTask(id: string, done: boolean) {
        "use server"
        await prisma.todo.update({ data: {done}, where: {id} })
        revalidatePath("/sample_db")
    }

    return (
        <div>
            <h1>Sample DB</h1>
            {/* {JSON.stringify(data) } */}
            <div>
                {data.map( (item, index) => (
                    <TodoItem 
                        key={index}
                        index={index}
                        id={item.id} 
                        title={item.title} 
                        done={item.done} 
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                    />
                ))}
            </div>

            <hr />
            <br />
            <div>
                <h2>Add task</h2>
                <form action={createTask}>
                    <input className={STYLE} type="text" name="title" />
                    <button className={STYLE} type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}
