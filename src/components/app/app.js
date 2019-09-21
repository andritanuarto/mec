import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import HeaderContainer from '../header/header-container';
import Products from '../products/products';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={HeaderContainer} />
          <Route path="/products" component={Products} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
