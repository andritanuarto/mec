import React from 'react';

const Header = (props) => {
  const searchHandler = (e) => {
    if (e.key === 'Enter') {
      props.history.push({
        pathname: "/products",
        search: `?keyword=${e.target.value}`
      });
    }
  }

  return (
    <header className="App-header">
      <input type="text" placeholder="search" onKeyDown={searchHandler}/>
    </header>
  );
}

export default Header;