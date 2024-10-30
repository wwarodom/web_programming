'use server'

export default async function createMessage(formData: FormData) {
    console.log("Message: ", formData.get("message") )
} 