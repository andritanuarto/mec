import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderContainer from '../header/header-container';
import ProductsContainer from '../products/products-container';
import Page404 from '../page-404/page-404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Route path="/" component={HeaderContainer} />
          <Switch>
            <Route path="/products" component={ProductsContainer} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
