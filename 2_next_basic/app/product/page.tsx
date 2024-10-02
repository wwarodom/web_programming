import Link from "next/link";


export default function Product() {
    return (
        <div className="flex flex-col items-center">
            <h1>Product</h1>
            <ul>
                <ProductItem name="A" price={10} />
                <ProductItem name="B" price={20} />
                <ProductItem name="B" price={30} />
            </ul>
            <Link href="/">Home</Link>
        </div>
    )
}

function ProductItem({name, price} : { 
    name: string;
    price: number;
} 
) {
    return (<li>{name} : {price}</li>)
}