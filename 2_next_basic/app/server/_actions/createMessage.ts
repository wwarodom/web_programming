'use server'

import { z } from 'zod'  // npm i --save zod

const schema = z.object({
    message: z.string({
        invalid_type_error: 'Invalid Message',
    }).min(3).max(10) ,
    email: z.string().email(),
})

export default async function createMessage(previous: unknown, formData: FormData) {

    const result = schema.safeParse({
        message: formData.get('message'),
        email: formData.get('email'),
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { message, email } = result.data
    console.log("Data: ", result.data)

    console.log("Before processing")
    await wait(500)
    console.log("Message: ", message)
    return `${message}: ${email}`
}

const wait = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));