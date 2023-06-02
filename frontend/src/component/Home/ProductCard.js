import React from 'react';
import {Link} from 'react-router-dom';
import { Rating } from "@material-ui/lab";

const ProductCard = ({product}) => {
  const options = {
    size: "small",
    color: "rgba(20,20,20,0.1)",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div>
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} /> <span className='productCardSpan'> ({product.numOfReviews} reviews) </span>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    </div>
  )
}

export default ProductCard;