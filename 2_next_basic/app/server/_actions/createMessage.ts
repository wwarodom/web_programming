'use server'

export default async function createMessage(previous: unknown, formData: FormData) {
    const message =  formData.get("message")
    const email =  formData.get("email")
    console.log("Message: ", message)
    return `${message}: ${email}`
} 