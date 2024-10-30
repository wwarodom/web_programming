'use client'

import { useFormState, useFormStatus } from "react-dom"
import createMessage from "./_actions/createMessage"

const style = `border-black border-2 p-1 m-1`

export default function Server() {
    const [state, action] = useFormState(createMessage, "Init state")
    return (
        <div>
            <h1>Result: </h1>
            <div>{ JSON.stringify(state)}</div>
            <hr />
            <br />
            <h1>Server Form</h1>
            <form action={action}>
                <div>
                    <label
                        htmlFor="message">Message </label>
                    <input
                        className={style}
                        min={3}
                        max={10}
                        type="text" name="message" />
                </div>
                <div>
                    <label
                        htmlFor="email">Email </label>
                    <input
                        className={style}
                        type="email" name="email" />
                </div>
                <SubmitButton />
            </form>

        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus() // pending = true means still process on the server

    return (<button
        disabled={pending}
        type="submit"
        className={style}
    >
        Submit{pending && "..."}
    </button>
    )
}