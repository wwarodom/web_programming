"use server"

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export default async function deletePost(id: number) {
    try {
        const deletedPost = await prisma.post.delete({
            where: {
                id,
            },
        });
        console.log('Post deleted:', deletedPost);
        revalidatePath("/blog")
    } catch (error) {
        console.error('Error deleting post:', error);
    }
} 