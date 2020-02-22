import React from 'react'
import { Header, Button, Modal } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router';

function LogAttributes({ description, _id, user, notes }) {
  const [modal, setModal] = React.useState(false);
  const router = useRouter();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;


  async function handleDelete() {
    const url = `${baseUrl}/api/log`
    const payload = { params: { _id } }
    await axios.delete(url, payload)
    router.push('/');
  }

  return <>
    <Header as="h3">Description:</Header>
    <p>{description}</p>
    <Header as="h4">Notes:</Header>
    <p>{notes}</p>
    {user && (
    <>
    <Button
      icon="trash alternate outline"
      color="red"
      content="Delete Log"
      onClick={() => setModal(true)}
    />
    <Modal open={modal} dimmer="blurring">
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this log?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModal(false)}
        content="cancel"/>
        <Button 
          negative
          icon="trash"
          labelPosition="right"
          content="Delete"
          onClick={handleDelete}
        />
      </Modal.Actions>
    </Modal>
    </>
    )}
  </>
}

export default LogAttributes;
