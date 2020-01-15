import { Card } from 'semantic-ui-react'

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      color: 'teal',
      fluid: true,
      childkey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }
  return <Card.Group items ={mapProductsToItems(products)} />
};

export default ProductList;
