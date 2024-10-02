import Link from "next/link";

const products = [
    { name: "A", price: 10 },
    { name: "B", price: 20 },
    { name: "C", price: 30 },
]

export default function Product() {
    return (
        <div className="flex flex-col items-center">
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

function ProductItem({ name, price }: {
    name: string;
    price: number;
}
) {
    return (<li>{name} : {price}</li>)
}