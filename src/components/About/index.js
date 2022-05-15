import coverImage from "../../assets/pjl.png"
import React from 'react';


function About() {

  const contactInfo = {
    name: 'Pat Lawler',
    email: 'patlaw777@icloud.com',
    phone: '218-213-3456',
    linkedIn: 'https://www.linkedin.com/in/av8erpat/',
    github: 'https://github.com/pjlawler'
  }
    
  // returns the jsx for the about page
  return (
      <section className="my-5">
          <h3 className='page-header'>About Me</h3>
          <div className="card">
            <h4 className="card-title">Pat's Bio</h4>
            <div className="card-main">
              <div className="card-frame">
                  <img src={coverImage} style={{ width: "90%" }} alt="cover" />
                  <h5>{contactInfo.name}</h5>
                  <ul>
                    <li><p>email: <a href={"mailto:".concat(contactInfo.email)}>{contactInfo.email}</a></p></li>
                    <li><p>phone: <a href={"tel:".concat(contactInfo.phone)}>{contactInfo.phone}</a></p></li>
                  </ul>                  
              </div>
              <div className="card-body">
                <p className="card-text">Retired as an Air Force Master Sergeant, Pat is currently persuing a career change as a web/software developer. He most recently worked an Airline Pilot and is now an endeavoring programmer/developer. He is currently attending the Univeristy of Minnesota's Coding Bootcamp focused on Full-Stack development including HTML, CSS, JavaScript, React, Node/NPM, VS Code, Git, mySQL, Firebase, and Heroku.  His expected completion date is June 2022.</p>
                <br />
                <p  className="card-text">His programming journey started in high-school where he taught himself Basic while experimenting in his study-hall which just happened to be the school's computer lab. He continued his learning as he entered the military/workforce.  He soon evolved into learning Visual Basic and using Microsoft VBA for both Access and Excel - which also led to his mastering of Structured Query Language (SQL); along with the manipulation of the SQL through VBA.  Over the years, he has written several applications which he has incoproated into his jobs and used by his employers and emplohyees; including for professional military training tracking, sales management, flight school training record keeping, drug testing customer and collection database, and several data parsing programs for integration of enterprise systems.</p>
                <br />
                <p className="card-text">In 2015, he ventured into learning Apple's Swift and Xcode utilizing Storyboards and programmatically developing UX/UI. He has incorporated several different external APIs along with Apple's built in APIs including Core Data, iCloud Kit, Cocoa Pods, Core Location in iOS development. He currently has two apps published on the Apple App Store. He has also worked with extently with Java and Python.</p>               
                <br />
                <h5>Education</h5>
                <ul>
                  <li>Univeristy of Minnesota - Full-Stack Web Developer Bootcamp</li>
                  <li>Embry-Riddle - Master's of Aeronautical Science</li>
                  <li>Embry-Riddle - B.S.</li>
                  <li>Lake Superior College - A.A.S.</li>
                </ul>
            </div>
          </div>
      </div>
    </section>

    );
}

export default About;