import React, { useEffect }from 'react';
import queryString from 'query-string';

const Products = (props) => {
  const handleProductSearch = (keyword) => {
    props.getProducts(keyword);
  }

  const keyword = queryString.parse(props.location.search).keyword;

  useEffect(() => {
    handleProductSearch(keyword);
  },[keyword]);

  const products = props.products.map((product) => {
    console.log(product);
    return (
      <li key={product.product_code}>
        <img src={product.default_image_urls.small_image_url} alt={product.default_image_urls} />
        {product.full_name}
      </li>
    );
  });


  return (
    <div className="product">
      {products}
    </div>
  )
}

export default Products;