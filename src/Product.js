import React from "react";

function Product( { labelText, productImage, bagName, price } ) {
    return (
        <article>
            <span>{labelText}</span>
            <img src={productImage} alt="Bag"/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product;