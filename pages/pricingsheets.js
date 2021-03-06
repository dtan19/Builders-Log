import React from 'react';
//import { CsvToHtmlTable } from 'react-csv-to-table';
import { 
  Form,
  Item, 
  Input, 
  TextArea, 
  Button, 
  Image, 
  Message, 
  Header,
  Embed, 
  Icon,
  Container
 } from 'semantic-ui-react';
 import axios from 'axios';
 import baseUrl from '../utils/baseUrl';
 import catchErrors from '../utils/catchErrors';
 import Router from 'next/router';
 import AddProductToCart from '../components/Product/AddProductToCart';

 const vidStyle = {
  paddingTop: '20px',
  marginBottom: '60px',
  background: '#777777',
};

const conStyle = {
  paddingTop: '20px',
  marginBottom: '20px',
  width: '100%',
  height: '50px',
  border: '1px solid #999',
  borderRadius: '5px',
  marginBottom: '60px',
};


 const INITIAL_TABLE = {
    name: "",
    columns: "",
    rows: "",
    media: "",
 };


function CreateSheet( _id, user ) {
  const [table, setTable] = React.useState(INITIAL_TABLE);
  const [mediaPreview, setMediaPreview] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const isTable = Object.values(table).every(el => Boolean(el))
    isTable ? setDisabled(false) : setDisabled(true);
  }, [table]);


function handleChange(event) {
  const { name, value, files } = event.target;
  if (name === "media") {
    setTable(prevState => ({ ...prevState, media: files[0] }
    ));
    setMediaPreview(window.URL.createObjectURL(files[0]));
  } else {
    setTable(prevState => ({ ...prevState, [name]: value }))
    ;
  }
}

async function handleImageUpload() {
  const data = new FormData()
  data.append('file', table.media)
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
    const url = `${baseUrl}/api/sheet`
    const { name, columns, rows, } = table;
    const payload = { name, columns, rows, mediaUrl }
    const response = await axios.post(url, payload);
    //console.log({ response });
    setTable(INITIAL_TABLE);
    setSuccess(true);
    const sheetId = response.data._id;
    Router.push(`/sheet?_id=${sheetId}`)
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
        Create New Pricing Sheet
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
        content="Your sheet has been created"
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
        <Image src={mediaPreview} rounded centered size="small"
        />
        <Form.Group>
          <p>Create your own pricing sheet:</p>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Sheet Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="columns"
            label="Number of Columns"
            placeholder="1"
            min="1"
            step="1"
            type="number"
            value={table.columns}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="rows"
            label="Number of Rows"
            placeholder="1"
            min="1"
            step="1"
            type="number"
            value={table.rows}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field
          control={Button}
          //disabled={disabled || loading}
          color="blue"
          content="Create"
          type="Submit"
        />
        <Item.Extra>
          <AddProductToCart user={user} productId={_id} />
        </Item.Extra>
      </Form>
  <h3>Here is a container:</h3>
  <Container style={conStyle}>
    
  </Container>
  </>
  )
}

export default CreateSheet;


