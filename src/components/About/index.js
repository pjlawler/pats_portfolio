import coverImage from "../../assets/pat_circle.png"
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
          <h3 className='page-header'></h3>
          <div className="card bio-card">
            <h4 className="card-title"></h4>
            <div className="card-main">
              <div className="card-frame">
                  <img src={coverImage} style={{ width: "75%" }} alt="cover" />
                  <h5>{contactInfo.name}</h5>
                  <ul>
                    <li><p>email: <a href={"mailto:".concat(contactInfo.email)}>{contactInfo.email}</a></p></li>
                    <li><p>phone: <a href={"tel:".concat(contactInfo.phone)}>{contactInfo.phone}</a></p></li>
                  </ul>                  
              </div>
              <div className="card-body">
                <p className="card-text">In June 2022, I completed the University of Minnesota's Coding Bootcamp focused on full-stack development including HTML, CSS, JavaScript, React, Node/NPM, VS Code, Git, mySQL, Firebase, and Heroku – and am actively pursuing a full-time, contract software developer role.</p>
                <br />
                <p  className="card-text">My programming journey started in highs school where I taught myself Basic while experimenting in study hall, which just happened to be the school's computer lab.</p>
                <br />
                <p className="card-text">I continued to learn about programming as I entered the military and soon elevated to learning Visual Basic and using Microsoft VBA for both Access and Excel. This allowed me to master Structured Query Language (SQL), along with the manipulation of the SQL through VBA.</p>
                <br />
                <p className="card-text">Over the years, I wrote several applications that were implemented and used by my employers and fellow employees; including a professional military training tracking software program, a sales management application, flight school training record keeping system, a drug testing customer and collection database, and several data parsing programs for integration of enterprise systems.</p>
                <br />
                <p className="card-text">In 2015, I ventured to learn Apple's Swift and Xcode utilizing Storyboards and programmatically developing UX/UI. I utilized several different external APIs along with Apple's built-in APIs including Core Data, iCloud Kit, Cocoa Pods, and Core Location in iOS development. </p>
                <br />
                <p className="card-text">I currently have two apps published on the Apple App Store and have also worked with extensively with Java and Python.</p>
                <br />
                <h5>Education</h5>
                <ul>
                  <li>Graduate of Full-Stack Web Developer Bootcamp, Univeristy of Minnesota</li>
                  <li>Master of Aeronautical Science, Embry-Riddle Aeronautical Univeristy</li>
                  <li>Bachelor of Science, Embry-Riddle Aeronautical Univeristy</li>
                  <li>Associate of Applied Science, Lake Superior Colege</li>
                </ul>
            </div>
          </div>
      </div>
    </section>

    );
}

export default About;