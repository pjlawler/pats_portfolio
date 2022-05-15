import React from "react";
import resumeImage from '../../assets/pats_resume.svg'


function Resume() {
    const proficiencies = [
        {
            name: 'HTML/CSS',
            rating: 4 
        },
        {
            name: 'Swift/Xcode',
            rating: 5
        },
        {
            name: 'JavaScript',
            rating: 4
        },
        {
            name: 'Node.js',
            rating: 4
        },
        {
            name: 'Java',
            rating: 2
        },
        {
            name: 'Python',
            rating: 1
        },
        {
            name: 'React',
            rating: 4
        },
        {
            name: 'jQuery',
            rating: 3
        },
        {
            name: 'Bootstrap',
            rating: 3
        },
        {
            name: 'MongoDB',
            rating: 3
        },
        {
            name: 'GitHub',
            rating: 3
        }
        
    ]

    const stars = (num) => "⭐️".repeat(num)

    return (
        <div>
        <section className="my-5">
            <h3 className='page-header'>Resume</h3>
            <div className="resume-wrapper">
                <a href={require('../../assets/pats_resume.pdf')} download>Download</a>
                <div className="list-columns">
                    <div className="left">
                        <h5>Proficiencies</h5>
                        <ul className="proficiencies-list">
                            { proficiencies.sort(function(a,b){return b.rating - a.rating}).map((prof, i) => (<li key={i}>{`${prof.name} ${stars(prof.rating)}` }</li>))} 
                        </ul>
                    </div>
                    <div className="right">
                        <img src={resumeImage} style={{width: "100%"}} alt="cover" />
                    </div>
                </div>    
            </div>

            
        </section>
    </div>
    )
}


export default Resume;