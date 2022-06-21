// In this example, we developed the custom Hook called useFetch, which fetch the Rest API through the URL 
// that is used as a parameter, and which renders whenever there is a change in this URL, returning the 
// Loading as true until the moment the data of the API are accessed and made available on the page, 
// changing the Loading to false and changing the page content to the API data.


import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products };
};
