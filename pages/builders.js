import React from 'react';
import axios from 'axios';
import LogList from '../components/Index/LogList';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import Router from 'next/router';

function Builders({ logs }) {
  return <LogList logs={logs} />
}

Builders.getInitialProps = async () => {
  // fetch data on the server
  const url = `${baseUrl}/api/logs`;
  const response = await axios.get(url);
  return { logs: response.data };
  // return response data as an object
  // note: this objest will be merged with existing props
}

export default Builders;
