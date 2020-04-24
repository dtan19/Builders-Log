import { Button } from 'semantic-ui-react';
import Link from 'next/link';
import { Card } from 'semantic-ui-react'

const orderCardStyle = {
  background: "#999", 
};

const divStyle = {
  paddingTop: "20px", 
};

function OrderList({ orders }) {
  function mapOrdersToItems(orders) {
    return orders.map(order => ({
      header: order.phone,
      //image: log.mediaUrl,
      meta: `Order Total: ${order.total} Order Items: ${order.products.product} Order Items: ${order.products.qty}`,
      color: "teal",
      fluid: `true`,
      childkey: order._id,
      href: `/order?_id=${order._id}`
    }));
  }
  return <><div sytle={divStyle}>
    <Button> 
      <Link href="/createorder">
        <a>Create New Order</a>
      </Link>
    </Button> 
    </div>
<div>
  <Card.Group fluid itemsPerRow="1" centered style={orderCardStyle} items ={mapOrdersToItems(orders)}>
  </Card.Group>
</div>
  </>
};

export default OrderList;
