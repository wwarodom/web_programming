"use server"

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

const TIMEOUT = 300 // 300 second

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${TIMEOUT} sec from now`)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function loginUser(userInput:any, remember: boolean) { 
  const {id, email, name} = userInput; 

  let timeout = TIMEOUT
  if (remember)
    timeout = 24*60*60;
  // Create the session
  const expires = new Date(Date.now() + timeout * 1000);
  const session = await encrypt({ id, email, name, expires });

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
  return { message: "Login Success" }
}

export async function logoutUser() {
  // Destroy the session 
  // cookies().set("session", "", { expires: new Date(0) });
  cookies().delete('session')
  return { message: "Logout Success" }
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + TIMEOUT * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    // secure: true,   // if https is used
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}