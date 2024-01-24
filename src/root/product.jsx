import { Link, useLoaderData } from "react-router-dom";

import { getProduct } from "../api";

import './product.scss';

export async function loader({ params }){
    const product = await getProduct(params.productId);

    if(!product){
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return { product };
}


export default function Product(){
    const { product } = useLoaderData();

    return (
        <div className="container">
            <img src={product.img} alt="" />
            <div className="content">
                <h2>{product.name}</h2>
                <h5>{product.price}₽</h5>

                <Link>
                    <div>
                        <p>Забронировать ботинки</p>
                    </div>
                </Link>
            </div>

            
        </div>
    )

}