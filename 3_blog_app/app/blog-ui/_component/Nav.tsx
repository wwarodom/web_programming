"use client"

import Link from "next/link"
import Logout from "./Logout"
import { getSession } from "@/utils/loginUser"
import { useEffect, useState } from "react"

export default function Nav() {

    const [user, setUser] = useState<{ name: string } | null>()

    useEffect(() => {
        const getUser = async () => {
            const user1 = await getSession()
            setUser(user1)
        }
        getUser()
    }, [])

    const handleLogout = () => {
        setUser(null); // Clear user state
    };

    return (
        <nav className="fixed inset-x-0 top-0 bg-white shadow-sm dark:bg-gray-950/90">
            <div className="w-full max-w-8xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    <a className="flex items-center" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                        </svg>
                        <span className="ml-2 font-bold">Blog-UI</span>
                        <span className="sr-only">Blog-UI</span>
                    </a>
                    <nav className="hidden md:flex gap-4">
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/">
                            Home
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
                            About
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
                            Services
                        </Link>
                        <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        {
                            user ?
                                <>Hello: {user.name} | <Logout handleLogout={handleLogout} /> </> :
                                <>
                                    <Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                                        href="/blog-ui/login">
                                        Sign in
                                    </Link>
                                    <Link className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                        href="/blog-ui/register">
                                        Sign up
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>)
}

// Template from: https://v0.dev/t/xYHqD5MkVkT