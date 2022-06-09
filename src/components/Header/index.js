import React, { NavLink } from 'react';
import Nav from '../Navigation'
import bannerImage from "../../assets/banner.png"



function Header(props) {

  // destructures the props variable for use in the jsx
  const { navItems, currentNavItem, setNavItem } = props

  // returns the jsx for  the header and includes the Navigation component
  return (
    
    <div className="header">
      <div className="header-items">
        <a href={'/'}><h1>Pat Lawler</h1></a>
        <div className="flex-row align-end">
          <Nav navItems={navItems} currentNavItem={currentNavItem} setNavItem={setNavItem} />
        </div>
      </div>
    </div>
  );
}

export default Header;