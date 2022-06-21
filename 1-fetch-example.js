// In this exercise, we have this page that receives the React custom Hook created in useFetch.js. 
// Remembering that to be considered by the React language as a custom Hook, we must always start the 
// name of the function with "use" in the case of this example is useFetch.


import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
