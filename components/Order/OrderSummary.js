import { Item, Label } from 'semantic-ui-react';

function OrderSummary({  email, mediaUrl, _id, name, total }) {
  return (
    <Item.Group>
        <Item>
          <Item.Image size="medium" src={mediaUrl}/>
          <Item.Content>
            <Item.Header>{email}</Item.Header>
            <Item.Description>
              <p>Here is a subtitle.</p>
              <p>{total}</p>
              <Label>Customer Name: {name}</Label>
            </Item.Description>
            <Item.Extra>
            </Item.Extra>
          </Item.Content>
        </Item>
    </Item.Group>
  )
}

export default OrderSummary;
