"use server"

import prisma from "@/utils/db"
import isValidPassword from "@/utils/isValidPassword";
import { loginUser } from "@/utils/loginUser";
import { z } from "zod";

const addSchema = z.object({
    email: z.string().email().max(20),
    password: z.string().min(3),
    remember: z
        .union([z.string(), z.undefined()]) // Accept string ('on') or undefined
        .transform((val) => val === "on"),  // Transform 'on' to true, undefined to false
})

type fieldErrors = {
    email?: string[] | undefined;
    password?: string[] | undefined;
    remember?: string[] | undefined;
    message?: string | undefined;
}

export default async function login(prevState: unknown, formData: FormData):
    Promise<{
        message?: string
        data?: string
        error?: fieldErrors
    }> {

    console.log("Email: " + formData.get("email") +
        formData.get("name"))

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return { error: result.error.formErrors.fieldErrors }
    }

    const data = result.data
    let { email, password, remember } = data

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        })

        console.log("Remember: ", remember)

        if (user) {
            console.log("User found:", user);
            if (await isValidPassword(password, user.password)) {
                console.log("Right pass")
                return await loginUser(user, remember);
            }
            else {
                console.log("Wrong pass")
                return { error: { message: "Incorrect user or password" } }
            }
        } else {
            console.log("No user found with that email.");
            return { error: { message: "Cannot find a user" } }
        }

    } catch (error) {
        console.log("error: " + error)
        return { error: { message: error + "" } }
    }
}