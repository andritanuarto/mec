import React from 'react';
import config from '../../config';

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
    <header className="header">
      <div className="mec-logo" dangerouslySetInnerHTML={{ __html: config.LOGO }} />
      <input type="text" placeholder="search" onKeyDown={searchHandler}/>
    </header>
  );
}

export default Header;