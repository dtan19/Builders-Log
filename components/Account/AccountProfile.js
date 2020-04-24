import { Header, Icon, Segment, Label } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';

function AccountProfile({ email, _id, name, createdAt }) {
  return (
    <Segment secondary inverted color="blue">
      <Header inverted textAlign="left" as="h1" icon>
        <Icon name="user"/>
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>Joined {formatDate(createdAt)}</Header.Subheader>
      </Header>
    </Segment>
  )
}

export default AccountProfile;
