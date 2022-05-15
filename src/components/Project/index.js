import React from 'react';

function Project(props) {
    
    // destructures the props variables for use in the jsx
    const {title, screenshot, technologies, url, github, index} = props

    // returns the jsx for an individual project in the portfolio
    return(
        <div className='project'>
            <h4 className='project-title'>{`${title}`}</h4>
            <img
                src={require(`../../assets/screenshots/${screenshot}.png`)}
                alt={title}   
                className='project-image'
                href={url}
                key={index}
            />
            <h5 className='project-text'>{`Techonogies: ${technologies}`}</h5>
            <div className='link-wrapper'>
                <a href={url} rel='noreferrer' target="_blank">URL</a>
                <a href={github} rel='noreferrer' target="_blank">GitHub</a>
            </div>    
        </div>
    )


}


export default Project;