import { Card, Icon } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';

const cardStyle = {
  width: "100%",
};

function CoinList({ coins }) {
  function mapCoinsToItems(coins) {
    return coins.map(coin => ({
      header: coin.year,
      image: coin.mediaUrl,
      meta: `Location: ${coin.index} Era: ${coin.era}`,
      description: `${coin.mint} | ${coin.grade}`,
      color: "teal",
      fluid: `true`,
      childkey: coin._id,
      href: `/coin?_id=${coin._id}`,
      icon: 'heart'
    }));
  }
  return <div>
  <Card.Group fluid itemsPerRow="2" centered style={cardStyle} items ={mapCoinsToItems(coins)} />
  <Icon name='heart' />
  </div>
};

export default CoinList;
