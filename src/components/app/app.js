import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

const App = () => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  }

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="search" onKeyDown={handleSearch}/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
