import React, { NavLink } from 'react';
import Nav from '../Navigation'



function Header(props) {

  // destructures the props variable for use in the jsx
  const { navItems, currentNavItem, setNavItem } = props

  // returns the jsx for  the header and includes the Navigation component
  return (
    <div className="flex-row header align-end">
      <h2 className='title'><a href="/">Pat Lawler</a></h2>
      <Nav navItems={navItems} currentNavItem={currentNavItem} setNavItem={setNavItem} />
    </div>
  );
}

export default Header;