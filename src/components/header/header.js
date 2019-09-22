import React from 'react';
import config from '../../config';
import { Link } from 'react-router-dom';
const Header = (props) => {
  const searchHandler = (e) => {
    if (e.key === 'Enter') {
      props.history.push({
        pathname: "/products",
        search: `?keyword=${e.target.value}`
      });

      e.target.value = null;
    }
  }

  console.log(props.location.pathname);

  return (
    <header className={props.location.pathname === '/' ? 'header header--full' : 'header'}>
      <div className="header--center">
        <Link
          to="/"
          className="header__logo"
          dangerouslySetInnerHTML={{ __html: config.LOGO }}
        />
        <input
          className="header__search"
          type="text"
          placeholder="Search products"
          onKeyDown={searchHandler}
        />
      </div>
    </header>
  );
}

export default Header;