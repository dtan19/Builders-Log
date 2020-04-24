import React from 'react';
import axios from 'axios';
import CoinList from '../components/Index/CoinList';
import baseUrl from '../utils/baseUrl';

function Coins({ coins }) {
  return <CoinList coins={coins} />
  
}

Coins.getInitialProps = async () => {
  // fetch data on the server
  const url = `${baseUrl}/api/coins`;
  const response = await axios.get(url);
  return { coins: response.data };
  // return response data as an object
  // note: this objest will be merged with existing props
}

export default Coins;