import { Link } from 'react-router-dom';
import './card.scss';


export default function Card({product}){
    return (
        <Link to={`/product/${product.id}`}>
            <div className='card'>
                <img src={product.img} alt="" srcset="" />
                <h3>{product.name}</h3>
                <h4>{product.price}₽</h4>
            </div>
        </Link>
    )
}