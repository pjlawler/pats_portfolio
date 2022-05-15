import React from 'react';
import Project from '../Project'

function Portfolio() {

    const projects = [
        {
            title: "Traveler's Hidden Gems",
            description: "The site provides the user to collaborate with other users on the favorite travel locations. Users can post the locations they've discovered and other users can find locations on the map.",
            technologies: 'Node.js, Handlebars.js, Express, Express-session, MySQL, HTML, CSS, Javascript, Sequelize, dotenv, bcrypt',
            github: 'https://github.com/pjlawler/travelers-hidden-gems',
            url: 'https://sleepy-woodland-16634.herokuapp.com/',
            screenshot: 'travelers-screenshot'
        },
        {
            title: 'Pizza Hunt',
            description: "Week 19 project.",
            technologies: 'MongoDB, Express.js, and IndexedDB',
            github: 'https://github.com/pjlawler/pizza-hunt',
            url: 'https://powerful-taiga-67670.herokuapp.com/',
            screenshot: 'pizza-hunt'
        },
        {
            title: 'Destination Briefing',
            description: 'The site provides the user with a destination briefing for their travels. Shows the current, including timzone difference, so the user can see the time change along with the current weather and average monthly temperaturs for the selectied country. It also provides the currency, language, electrical requirements, we even included pictures of the used plugs for better understanding of adapters will be needed when traveling. Additionally the site lists specific health information such as the drinking water safety and any required/recommended vaccinations. Our team received an overall grade of 100% on the project.',
            technologies: 'HTML5, CSS, JavaScript, Buma, & Moment.js including the incorporation of two third party APIs and utilizing local storage',
            github: 'https://github.com/pjlawler/destination-briefing',
            url: 'https://pjlawler.github.io/destination-briefing/',
            screenshot: 'destination-briefing'
        },
        {
            title: 'Guard Guys',
            description: "Website built for Guard Guys' OnSITE Drug Testing and Consulting",
            technologies: 'HTML5, CSS, Handlebars.JS, Bootstrap and Express.js',
            github: 'https://github.com/pjlawler/guardguys',
            url: 'http://guardguys.herokuapp.com/',
            screenshot: 'guard-guys'
        },
        {
            title: 'Learn Thai - Alphabet',
            description: "An iPhone/iPad app that teaches the user the Thai Alphabet using a flashcard style learning method as well as a tile guessing game which tests the users knowledge for speed and accuracy. All 44 Thai alphabet constantents are included with their associated phonetic-characters. The app utilizes the audio of a native Thai speaker so the user can hear the proper annouciation and tones of each of the letters and phonetic-characters.",
            technologies: 'Swift, Core Annimation',
            github: 'https://github.com/pjlawler/Thai-Alphabet',
            url: 'https://apps.apple.com/us/app/learn-thai-alphabet/id1505140057',
            screenshot: 'learn-thai'
        },
        {
            title: 'FunctionCalc',
            description: "An iPhone/iPad programmable conversation calculator that, in addition to standard calculator functions, it performs thousands of unit conversions including the latest currency exchange rates for every country in the world. FunctionCalc can also be programmed to perform complex formulas such as calculating a loan where the user inputs the amount to be borrowed, interest rate, and the length of loan to provide the monthly payment. All conversions and formulas may be stored in a 'soft-key' button that allows immediate access to the function for quick calculations. Additionally, FunctionCalc also performs mathematic functions on time, converts time to decimal and vice-versa.",
            technologies: 'Swift, API, JSON Parsing',
            github: 'https://github.com/pjlawler/FunctionCalc',
            url: 'https://apps.apple.com/us/app/functioncalc/id1455028714',
            screenshot: 'function-calc'
        }

    ]

    return (
        <section className="my-5">
            <h3 className='page-header'>My Projects</h3>
            <div className='project-group'>
                { projects.map((project, i) => (
                    <Project
                      title={project.title}
                      screenshot={project.screenshot}
                      technologies={project.technologies}
                      url={project.url}
                      github={project.github}
                      key={i}
                    />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;