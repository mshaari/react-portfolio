import React from 'react';

function About() {
    return (
        <div>
            <div className='About'>
                <img src={process.env.PUBLIC_URL + '/assets/Headshot.png'} alt="Headshot of Michael Shaari" className='Headshot' />
                <p className='AboutMe'>Hello, my name is Michael Shaari! I am a student at Harvard College intending to pursue a Bachelor's degree in Applied Mathematics - Economics & Computer Science and a concurrent Master's degree in Computer Science from the School of Engineering and Applied Sciences. I am a Columbia School of Engineering certified web developer. I am a graduate of Horace Mann School in New York City. I work at Macmillan Publishers in web development and marketing. I ran the Paris Marathon in 2023 and enjoy running in my free time.<br/><br/> I have always had a deep passion for technology and how it can be used to push the boundaries on what humans are capable of. More specifically, I aspire to leverage the integrate of technology in medicine. I am the founder of NeuroConnect Technologies, an ambient computing service designed to leverage user-friendly technology in everyday life to aid patients with Mild Cognitive Impairment and Senile Dementia. NeuroConnect was a finalist at the 2021 Yale Biomedical Innovation Hackathon.</p>
            </div>
        </div>

    );
}

export default About;
