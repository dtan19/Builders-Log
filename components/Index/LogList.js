import { Card } from 'semantic-ui-react'

const cardStyle = {
  width: "100%",
};

function LogList({ logs }) {
  function mapLogsToItems(logs) {
    return logs.map(log => ({
      header: log.description,
      image: log.mediaUrl,
      meta: `Hours: ${log.hours} Entry Type: ${log.type}`,
      color: "teal",
      fluid: `true`,
      childkey: log._id,
      href: `/log?_id=${log._id}`
    }));
  }
  return <Card.Group fluid itemsPerRow="3" centered style={cardStyle} items ={mapLogsToItems(logs)} />
};

export default LogList;
