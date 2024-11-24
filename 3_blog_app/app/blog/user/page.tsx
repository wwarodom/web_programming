import prisma from "@/utils/db"
import Link from "next/link";

export default async function User() {
    let users;
    try {
        users = await prisma.user.findMany()

    } catch (error) {
        console.log(error)
    }

    return (
        <>
            <h1 className="mb-4 text-xl font-bold">List users</h1>
            <table className="w-full text-md text-left rtl:text-right text-gray-800 dark:text-gray-600">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <br /><hr /><br />
            <Link href="/blog">Back</Link>
        </>
    )
}
