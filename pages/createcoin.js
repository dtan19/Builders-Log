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


 const INITIAL_COIN = {
    year: "",
    mint: "",
    era: "",
    grade: "",
    index: "",
    media: "",
 };

 const eraOptions = [
  {
    key: "30's",
    text: "30's",
    value: "30's",
  }, 
  {
    key: "40's",
    text: "40's",
    value: "40's",
  },
 ];

 const eraSelection = "50's"


function CreateCoin( _id, user ) {
  const [record, setRecord] = useState(INITIAL_COIN);
  const [mediaPreview, setMediaPreview] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');


  React.useEffect(() => {
    const isCoin = Object.values(record).every(el => Boolean(el));
    isCoin ? setDisabled(false) : setDisabled(true);
  }, [record]);


function handleChange(event) {
  const { name, value, files } = event.target;
  if (name === "media") {
    setRecord(prevState => ({ ...prevState, media: files[0] }
    ));
    setMediaPreview(window.URL.createObjectURL(files[0]));
  } else {
    setRecord(prevState => ({ ...prevState, [name]: value }));
  }
}

function handleSelect(event, data) {
  INITIAL_COIN.era = data.value;
  console.log(INITIAL_COIN.era);
}

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', record.media)
  data.append('upload_preset', 'builders-log')
  data.append('cloud_name', 'dtan19')
  const response = await axios.post(process.env.CLOUDINARY_URL, data);
  const mediaUrl = response.data.url;
  return mediaUrl;
}

async function handleSubmit(event) {
  try {
    event.preventDefault();
    setLoading(true);
    setError('');
    const mediaUrl = await handleImageUpload();
    const url = `${baseUrl}/api/coin`
    const { year, mint, era, grade, index, } = record;
    const payload = { mediaUrl, year, mint, era, grade, index }
    const response = await axios.post(url, payload);
    //console.log({ response });
    setRecord(INITIAL_COIN);
    setSuccess(true);
    const coinId = response.data._id;
    Router.push(`/coin?_id=${coinId}`)
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
        Create a Coin Record
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
        content="Your coin has been created"
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
            required
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small"/>
        <Form.Group>
          <p>Create your own coin record:</p>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="year"
            label="Year"
            placeholder="1961"
            value={record.year}
            onChange={handleChange}
            required
          />
          <Form.Field
            control={Input}
            name="index"
            label="Index"
            placeholder="1"
            value={record.index}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="mint"
            label="Mint"
            placeholder="D"
            value={record.mint}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="grade"
            label="Grade"
            placeholder="MS66"
            value={record.grade}
            onChange={handleChange}
          />
          <Form.Dropdown
            selection
            name="era"
            label="Era"
            placeholder="Please select Era"
            options={eraOptions}
            onChange={handleSelect}
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

export default CreateCoin;


