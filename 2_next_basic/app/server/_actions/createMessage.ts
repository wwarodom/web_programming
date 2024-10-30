'use server'

export default async function createMessage(previous: unknown, formData: FormData) {
    const message = formData.get("message")
    const email = formData.get("email")
    console.log("Before processing")
    await wait(5000)
    console.log("Message: ", message)
    return `${message}: ${email}`
}
 
const wait = (delay:number) => new Promise(resolve => setTimeout(resolve, delay));