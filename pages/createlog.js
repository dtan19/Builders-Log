import React from 'react';
import { 
  Form, 
  Input, 
  Dropdown,
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

 const INITIAL_LOG = {
    media: "",  
    date: "",
    hours: "",
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


function CreateLog() {
  const [log, setLog] = React.useState(INITIAL_LOG);
  const [mediaPreview, setMediaPreview] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState('');
  //const [logType, setLogType] = React.useState(true);

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

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', log.media)
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
    const url = `${baseUrl}/api/log`
    const { date, hours, description, notes } = log;
    const payload = { mediaUrl, date, hours, description, notes }
    const response = await axios.post(url, payload);
    console.log({ response });
    setLog(INITIAL_LOG);
    setSuccess(true);
  } catch(error) {
    catchErrors(error, setError);
    console.log(error);
  } finally {
    setLoading(false);
  }

}

/*function handleLogType() {
  if (INITIAL_LOG.type === "Purchase") {
    setLogType(true);
  } else {
    console.log('Here is a message');
  }
}*/

/*<Form.Field
control={Dropdown}
name="type"
label="Log Type"
type="text"
placeholder="Log Type"
options={logTypeOptions}
onChange={handleChange}
/>*/


  return (
    <>
      <Header as="h2" block>
        <Icon name='wrench' color="blue" />
        Create New Log
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
            name="date"
            label="Date"
            type="date"
            placeholder="Date"
            value={log.date}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="hours"
            label="Hours"
            placeholder="0.00"
            min="0.25"
            step="0.25"
            type="number"
            value={log.hours}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          value={log.description}
          onChange={handleChange}
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
          disabled={disabled || loading}
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
