import { Card } from 'semantic-ui-react'

function LogList({ logs }) {
  function mapLogsToItems(logs) {
    return logs.map(log => ({
      header: log.description,
      image: log.mediaUrl,
      meta: `Hours: ${log.hours}`,
      color: "teal",
      fluid: true,
      childkey: log._id,
      href: `/log?_id=${log._id}`
    }));
  }
  return <Card.Group fluid itemsPerRow="1" items ={mapLogsToItems(logs)} />
};

export default LogList;
