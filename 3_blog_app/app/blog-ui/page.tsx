import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/utils/db";
import Link from "next/link";
import Nav from "./_component/Nav";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "../blog/_actions/deletePost"; 

export default async function BlogUI() {

    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });
    console.log(JSON.stringify(posts))

    const user = await getSession()

    return <>
        <Nav />

        <h1 className="text-2xl font-bold mt-16 mb-4">Blog UI</h1>
        <div className="flex flex-wrap gap-4 mt-4">
            {
                posts.map(post => (
                    <Card key={post.id} className="mb-4 max-w-[400px]">
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>
                                    {post.subject}
                                </div>
                                <div>
                                    {user ?
                                        <>
                                            <Link href={{
                                                pathname: '/blog/edit',
                                                query: { id: post.id, subject: post.subject, detail: post.detail }
                                            }}>
                                                Edit |
                                            </Link>
                                            <DeleteButton 
                                                id={post.id}
                                                deletePost={deletePost}
                                            /> 
                                        </>
                                        :
                                        <></> }
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{post.detail}</p>
                        </CardContent>
                        <CardFooter>
                            <p>By: {post.user.name}</p>
                        </CardFooter>
                    </Card>)
                )
            }
        </div>
        <Link href="/"><Button>Home</Button></Link>
    </ >
}