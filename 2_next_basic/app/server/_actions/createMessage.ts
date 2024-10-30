'use server'

import { z } from 'zod'  // npm i --save zod

const schema = z.object({
    message: z.string({
        invalid_type_error: 'Invalid Message',
    }).min(3).max(10) ,
})

export default async function createMessage(previous: unknown, formData: FormData) {

    const data = schema.safeParse({
        message: formData.get('message'),
    })

    if (!data.success) {
        return {
            errors: data.error.flatten().fieldErrors,
        }
    }

    const { message } = data
    console.log("Data: ", data)

    // const message = formData.get("message")
    const email = formData.get("email")

    console.log("Before processing")
    await wait(500)
    console.log("Message: ", message)
    return `${message}: ${email}`
}

const wait = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));