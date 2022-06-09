import React from "react";


function Navigation(props) {

    // destructures the props array for use in the jsx
    const { navItems, currentNavItem, setNavItem } = props

    // returns the jsx for the nav bar for the header by iterating thorugh each of the navItems
    return (
      <nav>
        <ul className="flex-row">
          {navItems.map((navItem, i) => (
            <li
              // sets the class to navActive if its the current navItem
              className={`mx-1 nav-item ${currentNavItem === navItem && 'navActive'}`}
              key={i}
            >
              <span
                // if the user clicks on the nav item it will then set that item as the current nav item
                onClick={() => { setNavItem(navItem) }}
              >
                {navItem}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    )
}


export default Navigation;


