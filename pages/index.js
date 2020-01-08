import React from 'react'
import axios from 'axios'

function Home(products) {
  console.log(products)

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on the server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  return { hello: 'world' }
  // note: this objest will be merged with existing props
}

export default Home;
