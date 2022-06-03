import React from "react";
import resumeImage from '../../assets/pats_resume.svg'










function Resume() {
    const proficiencies = [
        {
            name: 'HTML/CSS',
            rating: 4,
            imgUrl: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
        },
        {
            name: 'Swift/Xcode',
            rating: 5,
        },
        {
            name: 'JavaScript',
            rating: 4,
            imgUrl: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'

        },
        {
            name: 'Node.js',
            rating: 4,
            imgUrl: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'

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
            rating: 4,
            imgUrl: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
        },
        {
            name: 'jQuery',
            rating: 3
        },
        {
            name: 'Bootstrap',
            rating: 3,
            imgUrl: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
        },
        {
            name: 'MongoDB',
            rating: 3,
            imgUrl: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
        },
        {
            name: 'GraphQL',
            rating: 3,
            imgUrl: 'https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white'
        }
        
    ]

    const stars = (num) => "⭐️".repeat(num)

    return (
        <div>
        <section className="my-5">
            <h3 className='page-header'>My Resume</h3>
            <div className="resume-wrapper">
                
                <div className="list-columns">
                    <div className="left">
                        <h5>Proficiencies</h5>
                        <ul className="proficiencies-list">
                            { proficiencies
                            .sort(function(a,b){return b.rating - a.rating})
                            .map((prof, i) => (<li key={i}>{`${prof.name} ${stars(prof.rating)}` }</li>))} 
                        </ul>
                    </div>
                    <div className="right">
                        <img src={resumeImage} style={{width: "100%"}} alt="cover" />
                        <a href={require('../../assets/pats_resume.pdf')} download>Download</a>
                    </div>
                </div>    
            </div>

            
        </section>
    </div>
    )
}


export default Resume;