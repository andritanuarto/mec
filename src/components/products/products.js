import React, { useEffect }from 'react';
import queryString from 'query-string';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Products = (props) => {
  const { getProducts, location, products, loading } = props;

  useEffect(() => {
    getProducts(queryString.parse(location.search).keyword);
  },[getProducts, location]);

  const productsItems = !_.isUndefined(products)
    ?
      products.map((product) => {
        return (
          <li className="products__list__item" key={product.product_code}>
              <div className="products__list__img-container">
                <img
                  src={product.default_image_urls.small_image_url}
                  alt={product.default_image_urls}
                />
              </div>
              <div className="products__list__name">{product.full_name}</div>
          </li>
        );
      })
    : <li className="products__list__item--empty">
        Can't find products that you're looking for
      </li>;

  const loader = (
    <div className="loader">
      Loading
      <span className="loader__dot">.</span>
      <span className="loader__dot">.</span>
      <span className="loader__dot">.</span>
    </div>
  )

  return (
    <div className="products">
      <ul className="products__list">
        {loading ? loader : productsItems}
      </ul>
    </div>
  );
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  products: PropTypes.array,
  loading: PropTypes.bool
}

export default Products;