import { Card } from 'semantic-ui-react';
import formatDate from '../../utils/formatDate';

function SheetList({ sheets }) {
  function mapSheetsToItems(sheets) {
    return sheets.map(sheet => ({
      header: sheet.name,
      image: sheet.mediaUrl,
      meta: `Created: ${formatDate(sheet.createdAt)}`,
      color: "teal",
      fluid: "true",
      childkey: sheet._id,
      href: `/sheet?_id=${sheet._id}`
    }));
  }
  return <Card.Group fluid itemsPerRow="1" items ={mapSheetsToItems(sheets)} />
};

export default SheetList;
