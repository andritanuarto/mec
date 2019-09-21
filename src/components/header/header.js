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
      <div className="header__center">
        <div className="header__logo" dangerouslySetInnerHTML={{ __html: config.LOGO }} />
        <input className="header__search" type="text" placeholder="search" onKeyDown={searchHandler}/>
      </div>
    </header>
  );
}

export default Header;