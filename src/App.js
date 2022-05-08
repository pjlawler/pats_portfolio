import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Gallery from '../src/components/Gallery'
import Bio from '../src/components/Bio'
import './App.css';

function App() {

  const [navItems] = useState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
   ]);
   
  const [currentNavItem, setNavItem] = useState(navItems[0]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `PJL - ${currentNavItem}`;
  });

  return (
    <div className="container">
      <Header navItems={navItems} currentNavItem={currentNavItem} setNavItem={setNavItem} />
      <br />
      {/* <p>A professional developer/coder who posseses an invaluable combination of education and experience coupled with an extreme passion and appitude for web/software developement</p> */}
      {currentNavItem === 'About Me' && (<Bio />)}
      {currentNavItem === 'Portfolio' && (<Gallery />)}
    </div>
  );
}

export default App;

