import './catalogue.scss';

import { getCatalogue } from '../api';

import {
    useLoaderData
} from 'react-router-dom'

import { useState } from 'react';

import Card from './card';

export async function loader({request}){
    const url = new URL(request.url);
    const q = url.searchParams.get("q")||"";

    const catalogue = await getCatalogue(q);
    console.log(catalogue.length)
    return { catalogue, q }
}


export default function Catalogue(){
    const { catalogue, q } = useLoaderData();

    const [page, setPage] = useState(0);
    const productsOnPage = 9;

    const pageButtonHandler = (value) => {
        if(value == -1 && page != 0){
            setPage(page - 1);
        }else if(value == +1 && Math.ceil(catalogue.length / productsOnPage) > page+1){
            setPage(page + 1);
        }
    }

    return (
        <div className='catalogue'>
            {
                catalogue.length ? (
                    <>
                        <div className="products-grid">
                            {
                                catalogue.slice(productsOnPage * page, productsOnPage * (page+1)).map((product, key)=>{
                                    console.log(product.name)
                                    return <Card product={product} key={product.id}/>
                                })
                            }
                        </div>
                        <div className="pages-navigation">
                            <button 
                                type='button' 
                                className={page==0 ? "inactive" : ""} 
                                onClick={()=>{pageButtonHandler(-1)}}>{"<"}</button>
                            <p>{page+1}</p>
                            <button 
                                type='button' 
                                className={Math.ceil(catalogue.length / productsOnPage) <= page+1 ? "inactive" : ""}
                                onClick={()=>{pageButtonHandler(+1)}}>{">"}</button>
                        </div>
                    </>
                ):(
                    <div className="container">
                        <p>У нас нет такого товара</p>
                    </div>
                )
            }
        </div>
    )
}