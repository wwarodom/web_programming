import prisma from "@/utils/db";
import { redirect } from "next/navigation";

import STYLE from "../../../constants/style"

export default function EditTitle({ searchParams }: {
    searchParams: { id: string; title: string }
}) {
    console.log("Search Params: ", searchParams)

    const { id, title } = searchParams

    async function updateTitle(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        console.log("Title: ", title)
        await prisma.todo.update({ data: { title }, where: { id } })
        redirect("/sample_db")
    }

    return (
        <div>
            Edit title
            <div>id: {id}</div>
            <div>title: {title}</div>
            <form action={updateTitle}>
                <input
                    className={STYLE}
                    type="text" name="title" defaultValue={title} />
                <button
                    className={STYLE}
                    type="submit">Update</button>
            </form>
        </div>
    )
}
