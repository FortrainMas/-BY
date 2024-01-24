import axios, * as others from 'axios';

const server = "http://localhost:3500";


export async function getCatalogue(q=""){
    try{
        const response = await axios.get(`${server}/catalogue?q=${q}`);
        console.log(response)
        return response.data
    }catch(e){
        console.log(e)
        return null;
    }
}

export async function getProduct(id){
    try{
        const response = await axios.get(`${server}/catalogue/${id}`);
        console.log(response)
        return response.data
    }catch(e){
        console.log(e);
        return null;
    }
}