import { Item, Label } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';
import pricingSheets from '../Log/PricingTable';


function SheetSummary({  name, columns, rows, mediaUrl, createdAt, _id }) {
  return (
    <Item.Group>
        <Item>
          <Item.Image size="medium" src={mediaUrl}/>
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Description>
              <p>Created: {formatDate(createdAt)}</p>
              <Label>Columns: {columns}</Label>
              <Label>Rows: {rows}</Label>
            </Item.Description>
            <Item.Extra>
            </Item.Extra>
          </Item.Content>
        </Item>
    </Item.Group>
  )
}

export default SheetSummary;

