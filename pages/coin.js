import axios from "axios";
import CoinSummary from '../components/Log/CoinSummary';
import baseUrl from '../utils/baseUrl';

function Coin({ coin, user }) {
  return (
    <>
      <CoinSummary {...coin}/>
    </>
  )
}

Coin.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/coin`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  //console.log({response});
  return { coin: response.data }
}

export default Coin;
