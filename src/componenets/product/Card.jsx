import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
const Card = ({product}) => {
    return (
 
      <div className="card" >
      <div className="img-cover">
        <img src={product.image}  alt="Product"/>
             
      </div>
      
    <div className="desc">
    <p> {product.title.substring(0,15)} ...</p> 
      <h3> ${product.price}</h3> <br/>
      <Link to ={`productdetail/${product.id}`}>Details <svg width="19" height="14" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5" stroke="white" strokeWidth="3"/>
      </svg></Link>
    </div>
   </div>
     );
}
 
export default Card;