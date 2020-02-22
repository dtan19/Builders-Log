import axios from "axios";
import LogSummary from '../components/Log/LogSummary';
import LogAttributes from '../components/Log/LogAttributes';
import baseUrl from '../utils/baseUrl';

function Log({ log, user }) {
  return (
    <>
      <LogSummary {...log}/>
      <LogAttributes user={user} {...log}/>
    </>
  )
}

Log.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/log`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { log: response.data }
}

export default Log;
