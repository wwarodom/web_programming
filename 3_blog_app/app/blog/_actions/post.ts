"use server"

import prisma from "@/utils/db" 
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addSchema = z.object({
    subject: z.string().min(3).max(20),
    detail: z.string().min(3),
})

type fieldErrors = {
    subject?: string[] | undefined;
    detail?: string[] | undefined;
    message?: string | undefined;
}

export default async function post(prevState: unknown, formData: FormData) : 
    Promise<{
        message?:string
        data?:string
        error?:fieldErrors
    }> {
 
    console.log("Subject: " + formData.get("subject") +
        formData.get("detail1"))

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return {error: result.error.formErrors.fieldErrors}
    }

    const data = result.data
    const {subject, detail} = data
    const user = await getSession()
    const userId = user.id

    try {
        await prisma.post.create({
            data: {
                subject,
                detail,
                userId,
            },
         })
    }
    catch (error) {
        console.log("error: " + error)
        return { error: {message: "Invalid email address" }}
    }
    revalidatePath("/blog")
    return { message: "Added user successful" }
}