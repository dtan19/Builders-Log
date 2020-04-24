import { Label } from 'semantic-ui-react';

function AccountUser({ _id, }) {
  return (
    <Label as='a'>{_id}</Label>
  )
}

export default AccountUser;
