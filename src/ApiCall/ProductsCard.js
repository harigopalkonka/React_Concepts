import React from 'react'

const ProductsCard = ({title,image,price,rating}) => {
  return (
    // <div className='card'>
    //     <image src={image}/>
    //     <p>{title}</p>
    //     <p>{price}</p>
    //     <p>{rating}</p>
    //   </div>

    <div>
      <h1>Product Item : {title}</h1>
      <img alt='' src={image}/>
      <p>${price}</p>      
    </div>
  )
}

export default ProductsCard
