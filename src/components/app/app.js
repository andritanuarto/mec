import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderContainer from '../header/header-container';
import ProductsContainer from '../products/products-container';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  console.log('public url: ', process.env.PUBLIC_URL);

  return (
    <Provider store={store}>
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" component={HeaderContainer} />
          <Route path="/products" exact component={ProductsContainer} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
