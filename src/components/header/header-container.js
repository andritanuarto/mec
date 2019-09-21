import { connect } from 'react-redux';
import Header from './header';
import { handleSearch } from '../../actions/search';

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (query) => {
      dispatch(handleSearch(query));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);