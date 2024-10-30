'use server'

export default async function createMessage(previous: unknown, formData: FormData) {
    const message =  formData.get("message")
    console.log("Message: ", message)
    return message
} 