import OrderList from '../components/Index/OrderList';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

function Orders({ user, orders }) {
  return <>
    <OrderList orders={orders}/>
  </>;
}

Orders.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { orders: [] }
  }
  const payload = { headers: { Authorization: token }}
  const url = `${baseUrl}/api/orders`
  const response = await axios.get(url, payload)
  return response.data;
}

export default Orders;

