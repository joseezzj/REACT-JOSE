import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Mi tienda</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
