import { Item, Label, Icon } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';


function CoinSummary({  year, mint, era, grade, index, mediaUrl, createdAt, _id }) {
  return (
    <Item.Group>
        <Item>
          <Item.Image size="medium" src={mediaUrl}/>
          <Item.Content>
            <Item.Header>{index}</Item.Header>
            <Item.Description>
              <p>Uploaded: {formatDate(createdAt)}</p>
              <Label>Year: {year}</Label>
              <Label>Era: {era}</Label>
              <Label>Mint: {mint}</Label>
              <Label>Grade: {grade}</Label>
              <Label>Index: {index}</Label>
              <Icon name='heart' />
            </Item.Description>
          </Item.Content>
        </Item>
    </Item.Group>
  )
}

export default CoinSummary;

