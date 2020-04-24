import axios from "axios";
import OrderSummary from '../components/Order/OrderSummary';
import OrderAttributes from '../components/Order/OrderAttributes';
import baseUrl from '../utils/baseUrl';

function Order({ order, user }) {
  return (
    <>
    <div>
      <OrderSummary {...order}/>
      <OrderAttributes user={user} {...order}/>
    </div>
    </>
  )
}


Order.getInitialProps = async ({ query: { _id } }) => {
    const url = `${baseUrl}/api/order`;
    const payload = { params: { _id } };
    const response = await axios.get(url, payload);
    return { order: response.data }
}

export default Order;
