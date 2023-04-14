import React, { useState } from 'react';
import Project from './Project';

function Header() {
    return (
        <div>
            <h2>Michael Shaari is a Columbia Engineering trained web developer and incoming first-year at Harvard College intending to pursue Computer Science.</h2>

            <h4 className='flashingUrl'>Please download <a href="https://docs.google.com/document/d/119_vzTPnYz5_6ILKF_BhAOgVCKMiuWqE/edit?usp=sharing&ouid=110974647710832920413&rtpof=true&sd=true">my resume</a></h4>

            <div>
                <h4>Professional Skills:</h4>
                <ul>
                    <li>HTML</li>
                    <li>Cascading Style Sheets</li>
                    <li>JavaScript</li>
                        <ul>
                            <li>Node</li>
                            <li>Jest</li>
                            <li>Express</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>MERN</li>
                            <li>React</li>
                            <li>State Management in React</li>
                        </ul>
                    <li>Insomnia</li>
                    <li>SQL</li>
                    <li>Model-View-Controller (MVC)</li>
                    <li>MongoDB</li>
                    <li>Progressive Web Applications (PWAs)</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
