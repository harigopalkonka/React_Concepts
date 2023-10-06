import React, { useEffect, useState } from 'react'

import ProductsCard from './ProductsCard'     // step 8

const ApiCall = () => {
  
  const [ products,updateProducts] = useState([])      // Step 1 and Step 2 CReate Products card file

  useEffect( () => {                                    // Step 5
    getProducts()
  },[])

  async function getProducts() {                                    // Step 4 
    let response = await fetch('https://fakestoreapi.com/products')

    let productList = await response.json()  // step 6
    updateProducts(productList)

    console.log(productList)               // step 7 TO Run comment step 3 of if condition
  }

  if (products.length ===0) {               // step 3 

    return (
        <div>
            <h1>Fetching The Products Data</h1>
        </div>
    )
  }

  return (
    // Step 14 
    <>
        <div>
            {
               products.map( (p) => <ProductsCard {...p} key={p.id}></ProductsCard>) 
            }
        </div>
    </>

    // step 12 to pass all element props at a time using  and comment below same line code // step 13 in products.js file
    // products.map( (p) => <ProductsCard {...p}></ProductsCard>)

    // products.map( (p) => <ProductsCard name={p.title}></ProductsCard>)                      // Step 9 comment below div tag // step 10 to pass props to get the data and add event "p" // step 11 is products.js file to props and 
    // <div>
    //   <h1>This API Call In Component of Product List </h1>
    //   <p></p>
    // </div>
  )
}

export default ApiCall


// this file and app.js file
