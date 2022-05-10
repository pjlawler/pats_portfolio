import React from 'react';


function Header(props) {

  const { navItems, currentNavItem, setNavItem } = props
    
  return (
    <div className="flex-row header align-end">
      <h2 className='title'><a href="/">Pat Lawler</a></h2>
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
    </div>
  );
}

export default Header;