import React, { useState } from 'react';
import { 
  Form, 
  Input,
  Select,
  TextArea, 
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
import AccountProfile from '../components/Account/AccountProfile';
import AccountUser from '../components/Account/AccountUser';
import jwt from 'jsonwebtoken';
import { useRowSelect } from 'react-table';

 const INITIAL_LOG = {
    user: "TestUSer",
    media: "",  
    date: "",
    hours: "",
    amount: "",
    logType: "",
    description: "",
    notes: "",
 };

 const logTypeOptions = [
  {
    key: 'Assembly',
    text: 'Assembly',
    value: 'Assembly',
  }, 
  {
    key: 'Research',
    text: 'Research',
    value: 'Research',
  },
  {
    key: 'Design',
    text: 'Design',
    value: 'Design',
  },
  {
    key: 'Purchase',
    text: 'Purchase',
    value: 'Purchase',
  },
  {
    key: 'Testing',
    text: 'Testing',
    value: 'Testing',
  },
 ]


function CreateLog({ user, _id }) {
  const [log, setLog] = useState(INITIAL_LOG);
  const [mediaPreview, setMediaPreview] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const [userId, setUser] = useState(INITIAL_LOG);
  const [amount, setAmount] = useState(false);

  React.useEffect(() => {
    const isLog = Object.values(log).every(el => Boolean(el))
    isLog ? setDisabled(false) : setDisabled(true);
  }, [log]);

function handleChange(event) {
  const { name, value, files } = event.target;
  if (name === "media") {
    setLog(prevState => ({ ...prevState, media: files[0] }
    ));
    setMediaPreview(window.URL.createObjectURL(files[0]));
  } else {
    setLog(prevState => ({ ...prevState, [name]: value }));
  }
}

function handleType(event, data) {
  if (data === "Purchase") {
    setAmount(true);
    console.log("Purchase entry");
  } else {
    setAmount(false);
    console.log("Not a purchase entry");
  }
}

function handleSelect(event, data) {
  INITIAL_LOG.logType = data.value;
  console.log(INITIAL_LOG.logType);
  handleType;
}

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', log.media)
  data.append('upload_preset', 'builders-log')
  data.append('cloud_name', 'dtan19')
  const response = await axios.post(process.env.CLOUDINARY_URL, data);
  const mediaUrl = response.data.url;
  //console.log(mediaUrl);
  return mediaUrl;
}

async function handleSubmit(event) {
  try {
    event.preventDefault();
    setLoading(true);
    setError('');
    const mediaUrl = await handleImageUpload();
    const url = `${baseUrl}/api/log`
    //getUser();
    console.log(_id);
    const { date, hours, amount, logType, description, notes } = log;
    const payload = { mediaUrl, date, hours, amount, logType, description, notes }
    const response = await axios.post(url, payload);
    //console.log({ response });
    setSuccess(true);
    const logId = response.data._id;
    Router.push(`/log?_id=${logId}`)
  } catch(error) {
    catchErrors(error, setError);
    console.log(error);
  } finally {
    setLoading(false);
  }

}

  return (
    <>
      <Header as="h3" block>
      <AccountProfile {...user}/>
        <Icon name='wrench' color="blue"/>
        Create Work Log 
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
        content="Your log has been posted"
        />
        <Form.Group widths="equal">
        <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Image"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered 
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            disabled={true}
            name="user"
            label="User ID:"
            value={user}
            onLoad={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown
            selection  
            name="logType"
            label="Log Type"
            placeholder="Pick Something"
            options={logTypeOptions}
            onChange={handleSelect}
            required
          />
          <Form.Field
            control={Input}
            name="date"
            label="Date"
            type="date"
            placeholder="Date"
            value={log.date}
            onChange={handleChange}
            required
          />
          {amount ? (<Form.Field
            control={Input}
            name="amount"
            label="Amount"
            placeholder="0.00"
            min="0.00"
            type="number"
            value={log.amount}
            onChange={handleChange}
            required
          />) :
          (<Form.Field
            control={Input}
            name="hours"
            label="Hours"
            placeholder="0.00"
            min="0.25"
            step="0.25"
            type="number"
            value={log.hours}
            onChange={handleChange}
            required
          />)}
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          value={log.description}
          onChange={handleChange}
          required
        />
        <Form.Field
          control={TextArea}
          name="notes"
          label="Notes"
          placeholder="Notes"
          value={log.notes}
          onChange={handleChange}
        />
        <Form.Field
          control={Button}
          //disabled={disabled || loading}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="Submit"
        />
      </Form>
    </>
  )
}

export default CreateLog;
