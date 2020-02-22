import { Item, Label } from 'semantic-ui-react';

function LogSummary({  date, mediaUrl, _id, description, notes }) {
  return (
    <Item.Group>
        <Item>
          <Item.Image size="medium" src={mediaUrl}/>
          <Item.Content>
            <Item.Header>{description}</Item.Header>
            <Item.Description>
              <p>Here is a subtitle.</p>
              <Label>Date: {date}</Label>
            </Item.Description>
            <Item.Extra>
            </Item.Extra>
          </Item.Content>
        </Item>
    </Item.Group>
  )
}

export default LogSummary;
