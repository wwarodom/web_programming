"use client"

import { logoutUser } from "@/utils/loginUser";

export default function Logout() {
  return (<button className="ml-2" onClick={async () => await logoutUser()}>Logout</button>)
}
