import React from 'react';

const Header = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title">Employee Search App</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search employees by country"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;