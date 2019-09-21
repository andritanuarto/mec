import { connect } from 'react-redux';
import Products from './products';
import { handleSearch } from '../../actions/products';

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    loading: state.products.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (keyword) => {
      dispatch(handleSearch(keyword));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);