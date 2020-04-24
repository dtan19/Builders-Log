import React from 'react';
import axios from 'axios';
import SheetList from '../components/Index/SheetList';
import baseUrl from '../utils/baseUrl';

function Sheets({ sheets }) {
  return <SheetList sheets={sheets} />
}

Sheets.getInitialProps = async () => {
  // fetch data on the server
  const url = `${baseUrl}/api/sheets`;
  const response = await axios.get(url);
  return { sheets: response.data };
  // return response data as an object
  // note: this objest will be merged with existing props
}

export default Sheets;