import { connect } from 'react-redux';
import Products from './products';
import { handleSearch } from '../../actions/search';

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
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