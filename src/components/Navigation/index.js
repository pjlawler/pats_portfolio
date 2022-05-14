import React from "react";


function Navigation(props) {

    const { navItems, currentNavItem, setNavItem } = props

    return (
      <nav>
        <ul className="flex-row">
          {navItems.map((navItem, i) => (
            <li
              className={`mx-1 ${currentNavItem === navItem && 'navActive'}`}
              key={i}
            >
              <span
                onClick={() => {
                  setNavItem(navItem)
                }}
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


