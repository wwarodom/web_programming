const style = `border-black border-2 p-1 m-1`

export default function Server() {
    return (
        <div>
            <h1>Server Form</h1>
            <form action="">
                <div>
                    <label 
                        htmlFor="message">Message </label>
                    <input
                        className={style}
                        type="text" name="message" />
                </div>
                <button
                    type="submit"
                    className={style}
                >Submit</button>
            </form>

        </div>
    )
}
