import React, { useEffect }from 'react';
import queryString from 'query-string';
import _ from 'lodash';

const Products = (props) => {
  const { getProducts, location, products, loading } = props;

  useEffect(() => {
    getProducts(queryString.parse(location.search).keyword);
  },[getProducts, location]);

  const productsItems = !_.isUndefined(products)
    ?
      products.map((product) => {
        return (
          <li key={product.product_code}>
            <img
              src={product.default_image_urls.small_image_url}
              alt={product.default_image_urls}
            />
            {product.full_name}
          </li>
        );
      })
    : <li>Can't Find Product You</li>;

  return (
    <div className="product">
      {loading ? "Loading" : productsItems}
    </div>
  );
}

export default Products;