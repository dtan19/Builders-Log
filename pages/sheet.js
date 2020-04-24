import axios from "axios";
import SheetSummary from '../components/Log/SheetSummary';
//import LogAttributes from '../components/Log/LogAttributes';
import baseUrl from '../utils/baseUrl';

function Sheet({ sheet, user }) {
  return (
    <>
      <SheetSummary {...sheet}/>
    </>
  )
}

Sheet.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/sheet`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  //console.log({response});
  return { sheet: response.data }
}

export default Sheet;
