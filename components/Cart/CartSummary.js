import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products])

  return <>
    <Divider />
    <Segment clearing size="large">
      <strong>Subtotal:</strong> ${cartAmount}
      <StripeCheckout
      name="Builder's Log"
      amount={stripeAmount}
      image={products.length > 0 ? products[0].product.mediaUrl : ""}
      currency="USD"
      shippingAddress={false}
      billingAddress={true}
      zipCode={true}
      stripeKey="pk_test_td9kjGw7RnHpkwvsXtzoL76900Zc0P9ulc"
      token={handleCheckout}
      triggerEvent="onClick"
      >
        <Button 
          icon="cart"
          disabled={isCartEmpty || success}
          color="teal"
          floated="right"
          content="Checkout"
        />
      </StripeCheckout>
    </Segment>
  </>;
}

export default CartSummary;
