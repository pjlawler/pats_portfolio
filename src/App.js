import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Portfolio'
import Bio from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {

  // array of the available pages to be displayed in the navigation bar
  const [navItems] = useState([
    'About Me',
    'Portfolio',
    'Contact',
    'Resume'
   ]);
   
  // use state to keep track of the current page being displayed
  const [currentNavItem, setNavItem] = useState(navItems[0]);

  // updates the title in the browser tab based on the current page
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `PJL - ${currentNavItem}`;
  });

  // returns the jsx to be displayed on the page with the current page componenets based on the current nav item selected
  return (
    <div className="container">
      <Header navItems={navItems} currentNavItem={currentNavItem} setNavItem={setNavItem} />
      <br />
      {/* <p>A professional developer/coder who posseses an invaluable combination of education and experience coupled with an extreme passion and appitude for web/software developement</p> */}
      {currentNavItem === 'About Me' && (<Bio />)}
      {currentNavItem === 'Portfolio' && (<Gallery />)}
      {currentNavItem === 'Contact' && (<Contact />)}
      {currentNavItem === 'Resume' && (<Resume />)}
      <Footer />
    </div>
  );
}

export default App;

