const express = require('express');
const app = express();
const PORT  = process.env.PORT || 3500;
const cors = require("cors");

app.use(cors());

const links = [
    "https://static.street-beat.ru/upload/resize_cache/iblock/265/240_240_1/7ax420w6caa9c5eum96wlvp403tyh1ao.jpg",
    "https://static.street-beat.ru/upload/resize_cache/iblock/533/240_240_1/ckp4khjg8gyzwxpu52h6wai67uya95wy.jpg",
    "https://static.street-beat.ru/upload/resize_cache/iblock/18f/240_240_1/5g6h5kf0vedmjx73rlhm1fvtu3wvbq1f.jpg",
    "https://static.street-beat.ru/upload/resize_cache/iblock/b63/240_240_1/y9mn4ly8z6ydwvmxe2a803gq0skfmbi9.jpg",
    "https://static.street-beat.ru/upload/resize_cache/iblock/d89/500_500_1/iwnff5bxphhck0firgo11awpsf18wdsb.jpg",
    "https://media.garderobo.ru/streetbeat/medium/25b842f1b726b044bfab89bcb740db34.jpg",
    "https://media.garderobo.ru/streetbeat/medium/9d9dc9eadc0c5b3fdb0a4d297dc68be0.jpg",
    "https://media.garderobo.ru/streetbeat/medium/764398236c613408ea480d825cdef670.jpg",
    "https://media.garderobo.ru/streetbeat/medium/754d2b44c2566cfcb9059df6d7f1c9d9.jpg",

    "https://static.street-beat.ru/upload/resize_cache/iblock/18f/240_240_1/5g6h5kf0vedmjx73rlhm1fvtu3wvbq1f.jpg",

]


const catalog = [];

for(let i = 0; i < links.length; i++){
    catalog.push({
        name: "Ботинки #" + (i+1),
        img: links[i],
        id: "dsfbapiw" + i,
        price: Math.ceil((Math.floor(Math.random() * 40000)+15000)/100) * 100,
        size: Math.floor(Math.random() * 20) + 27
    })
}


app.get("/catalogue", (req, res)=>{
    const q = req.query.q || "";

    const result = catalog.filter(pr => pr.name.includes(q));

    res.json(result);
})

app.get("/catalogue/:id", (req, res)=>{
    setTimeout(()=>{
    const id = req.params.id;
    const result = catalog.filter(pr => pr.id == id)
    if(res.length == 0){
        return res.status(404);
    }else{
        return res.json(result[0]);
    }

}, 0);

})


app.listen(PORT, ()=>{console.log(`Runing on port ${PORT}`)})