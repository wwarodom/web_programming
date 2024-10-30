'use client'

import { useFormState, useFormStatus } from "react-dom"
import createMessage from "./_actions/createMessage"

const style = `border-black border-2 p-1 m-1`

export default function Server() {
    const [state, action] = useFormState(createMessage, {})
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
                       
                        type="text" name="message" /> 
                    {
                       ( state?.errors) && <span className="text-red-600">{state?.errors.message[0]}</span> 
                    }
                </div>
                <div>
                    <label
                        htmlFor="email">Email </label>
                    <input
                        className={style}
                        type="text" name="email" />
                     {
                       ( state?.errors) && <span className="text-red-600">{state?.errors.email[0]}</span> 
                    }
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