import React, { useState } from 'react';
import Project from './Project';

function Footer() {
    return (
        <footer>
            <div className='FooterElements'>
            <ul>
                <a href="#https://github.com/mshaari">GitHub</a>
            </ul>
            <ul>
                <a href="mailto:michael.shaari@gmail.com">Email</a>
            </ul>
            <ul>
                <a href="https://www.linkedin.com/in/michael-shaari/">LinkedIn</a>
            </ul>
        </div>
        </footer>
    );
}

export default Footer;
