import prisma from "@/utils/db"
// const prisma = require("./utils/db")
import hashPassword from "./hashPassword"
// const hashPassword = require("./hashPassword")

export default async function seed() {

    const password = await hashPassword('password')

    const user = await prisma.user.create({
        data: {
            email: 'warodom@prisma.io',
            name: 'wwarodom',
            password,
        }
    })

    const posts = await prisma.user.create({
        data: {
            email: 'ariadne@prisma.io',
            name: 'Ariadne',
            password,
            posts: {
                create: [
                    {
                        subject: 'Subject',
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!'
                    },
                    {
                        subject: 'Subject 2',
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt 2',
                    },
                ],
            },
        },
    })
    console.log(user)
    console.log(posts)
}

export async function seedPost() {
    const newPost = await prisma.post.create({
        data: {
            subject: 'New Subject',
            detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!',
            userId: 1,  // Assuming a user with ID 1 exists
        },
    }) 
 
console.log(newPost)
}

