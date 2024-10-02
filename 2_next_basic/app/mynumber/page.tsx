import Link from "next/link"; 
let mynumber = 90;
mynumber = 1;
export default function ParentComponent() {
    function changeMyNumber(newnumber: number) {
        mynumber = newnumber
    }
    return (
        <div className="flex flex-col items-center">
            <div>My number in ParentComponent = {mynumber}</div>
            <ShowMyNumber
                mynumber={mynumber}
                changeMyNumber={changeMyNumber}
            />
            <Link href="/">Home</Link>
        </div>
    )
}

function ShowMyNumber(
    { mynumber, changeMyNumber }:
        {
            mynumber: number,
            changeMyNumber: (newNumber: number) => void
        }

) {
    mynumber = 8;
    changeMyNumber(9)
    return (<div>My number in ShowNumber {mynumber}</div>)
}