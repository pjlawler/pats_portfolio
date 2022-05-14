import React from 'react';
import Nav from '../Navigation'


function Header(props) {

  const { navItems, currentNavItem, setNavItem } = props

  return (
    <div className="flex-row header align-end">
      <h2 className='title'><a href="/">Pat Lawler</a></h2>
      <Nav navItems={navItems} currentNavItem={currentNavItem} setNavItem={setNavItem} />
    </div>
  );
}

export default Header;