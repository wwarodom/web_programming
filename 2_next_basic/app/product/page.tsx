import Link from "next/link";

const products = [
    { name: "A", price: 10 },
    { name: "B", price: 20 },
    { name: "C", price: 30 },
]

let mynumber = 90;
mynumber = 1;

export default function Product() {

    function changeMyNumber(newnumber: number) {
        mynumber = newnumber
    }

    return (
        <div className="flex flex-col items-center">
            <div>My number in Parent = {mynumber}</div>
            <ShowMyNumber
                mynumber={mynumber}
                changeMyNumber={changeMyNumber}
            />
            <h1>Product</h1>
            {/* <ul>
                <ProductItem name="A" price={10} />
                <ProductItem name="B" price={20} />
                <ProductItem name="C" price={30} />
            </ul> */}
            <ul>
                {products.map((item, index) =>
                    <ProductItem
                        key={index}
                        name={item.name}
                        price={item.price} />)
                }
            </ul>

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
    return (<div>My number in Child {mynumber}</div>)
}

function ProductItem({ name, price }: {
    name: string;
    price: number;
}
) {
    return (<li>{name} : {price}</li>)
}