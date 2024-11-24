import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers"; 


export default async function hashPassword(password: string) {
    const arrayBuffer = await crypto.subtle.digest(
        "SHA-512",
        new TextEncoder().encode(password)
    )

    return Buffer.from(arrayBuffer).toString("base64")
}
 

const secretKey = "secret"
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

export async function loginUser(userInput: any, remember: boolean) {
    const { id, email, name } = userInput;

    let timeout = TIMEOUT
    if (remember)
        timeout = 24 * 60 * 60;
    // Create the session
    const expires = new Date(Date.now() + timeout * 1000);
    const session = await encrypt({ id, email, name, expires });

    // Save the session in a cookie
    // cookies().set("session", session, { expires, httpOnly: true });
    return { message: "Login Success" }
}



(async () => {
    // console.log(await hashPassword("mypass"))
    console.log(await encrypt({ id: 1, name: "Johen" }))
    console.log(await decrypt(await encrypt({ id: 1, name: "Johen" })))
})()
