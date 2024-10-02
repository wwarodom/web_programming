import Link from "next/link";

const products = [
    { name: "A", price: 10 },
    { name: "B", price: 20 },
    { name: "C", price: 30 },
    { name: "C", price: 30 },
    { name: "C", price: 30 },
    { name: "C", price: 30 },
    { name: "C", price: 30 },
]


// const instruments = [
//     { 
//         name: "Fender Guitar",
//         price: 300,
//         image_url: "https://...",
//         like: 20,
//         is_new: true,
//     },
// ]

export default function Product() {

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl mb-8">Product</h1>
            <ul className="flex justify-center gap-4 flex-wrap w-full">
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
    return (
    <a href="#" className="group block overflow-hidden">
        <div className="relative w-96 h-[150px] sm:h-[220px]">
            <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
        </div>

        <div className="relative bg-white pt-3 flex justify-between mb-8">
            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {name}
            </h3>

            <p className="tracking-wide text-gray-900">${price}</p>
        </div>
    </a>)
}