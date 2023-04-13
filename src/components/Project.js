import React from 'react';

function Project(props) {
    const { projects } = props;


    return (
        <div className='projectList'>
            {projects.map((project) => (
                <div key={project.name} className='projectListItem'>
                    <a href={project.url}><h3>{project.name}</h3></a>
                    <img src={process.env.PUBLIC_URL + '/assets/' + project.image} />
                    <p className='flashingUrl'>View the <a href={project.github}>GitHub Repository</a></p>
                    <p></p>
                </div>
            ))}
        </div>
    );
}

export default Project;