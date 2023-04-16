import React from 'react';

function About() {
    return (
        <div>
            <h2 id='welcomeNote'>Welcome to my Professional Portfolio</h2>
            <div className='About'>
                <img src={process.env.PUBLIC_URL + '/assets/Headshot.png'} alt="Headshot of Michael Shaari" className='Headshot' />
                <p className='AboutMe'>Hello, my name is Michael Shaari! I am a student at Harvard College intending to pursue a Bachelor's degree in Applied Mathematics - Economics & Computer Science and a concurrent Master's degree in Computer Science from the School of Engineering and Applied Sciences. I am a graduate of Horace Mann School in New York City. I work at Macmillan Publishers in web development and marketing. I ran the Paris Marathon in 2023 and enjoy running in my free time. </p>
            </div>
        </div>

    );
}

export default About;
