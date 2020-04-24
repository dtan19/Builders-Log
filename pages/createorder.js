import React, { useState } from 'react';
import { 
  Form,
  Item, 
  Input, 
  TextArea,
  Dropdown,
  Button, 
  Image, 
  Message, 
  Header, 
  Icon
 } from 'semantic-ui-react';
 import axios from 'axios';
 import baseUrl from '../utils/baseUrl';
 import catchErrors from '../utils/catchErrors';
 import Router from 'next/router';


 const INITIAL_ORDER = {
    user: "",
    products: [],
    name: "",
    phone: "",
    email: "",
    notes: "",
    orderStatus: "",
    total: "",
    media: "",
 };

 const statusOptions = [
  {
    key: "Open",
    text: "Open",
    value: "Open",
  }, 
  {
    key: "Complete",
    text: "Complete",
    value: "Complete",
  },
 ];


function CreateOrder( _id, user ) {
  const [record, setRecord] = useState(INITIAL_ORDER);
  const [mediaPreview, setMediaPreview] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');



  React.useEffect(() => {
    const isOrder = Object.values(record).every(el => Boolean(el));
    isOrder ? setDisabled(false) : setDisabled(true);
  }, [record]);


  function handleChange(event, data) {
    const { name, value, text, files } = event.target;
    if (name === "media") {
      setRecord(prevState => ({ ...prevState, media: files[0] }
      ));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
    setRecord(prevState => ({ ...prevState, [name]: value }));
    //setStatus(prevState => ({ ...prevState, [name]: data }));
    console.log(INITIAL_ORDER);
  }
}

function handleSelect(event, data) {
    INITIAL_ORDER.orderStatus = data.value;
    console.log(INITIAL_ORDER.orderStatus);
}

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', record.media)
  data.append('upload_preset', 'builders-log')
  data.append('cloud_name', 'dtan19')
  const response = await axios.post(process.env.CLOUDINARY_URL, data);
  const mediaUrl = response.data.url;
  console.log(mediaUrl);
  return mediaUrl;
}

async function handleSubmit(event) {
  try {
    event.preventDefault();
    setLoading(true);
    setError('');
    const mediaUrl = await handleImageUpload();
    const url = `${baseUrl}/api/order`
    const { name, phone, email, notes, orderStatus, total  } = record;
    const payload = { mediaUrl, name, phone, email, notes, orderStatus, total }
    const response = await axios.post(url, payload);
    //console.log({ response });
    setRecord(INITIAL_ORDER);
    setSuccess(true);
    const orderId = response.data._id;
    Router.push(`/order?_id=${orderId}`)
  } catch(error) {
    catchErrors(error, setError)
  } finally {
    setLoading(false);
  }

}

  return (
    <>
      <Header as="h2" block>
        <Icon name='add' color="orange" />
        Create an Order
      </Header>
      <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit} >
      <Message 
        error
        header="Oops!"
        content={error}
        />
        <Message 
        success
        icon="check"
        header="Success"
        content="Your order has been created"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Media"
            //accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small"/>
        <Form.Group>
          <p>Create your own order:</p>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Jane Smith"
            value={record.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="phone"
            label="Phone"
            placeholder="801-555-1234"
            value={record.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="email"
            label="Email"
            placeholder="name@email.com"
            value={record.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={TextArea}
            name="notes"
            label="Notes"
            placeholder="Type any special instructions here."
            value={record.notes}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Dropdown
            selection
            name="orderStatus"
            label="Status"
            placeholder="Open"
            options={statusOptions}
            onChange={handleSelect}
            required
          />
          <Form.Field
            control={Input}
            name="total"
            label="Total"
            placeholder="3.99"
            value={record.total}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Field
          control={Button}
          //disabled={disabled || loading}
          color="blue"
          content="Create"
          type="Submit"
        />
      </Form>
    </>
  )
}

export default CreateOrder;


