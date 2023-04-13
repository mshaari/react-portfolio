import React, { useState } from 'react';
import Project from './Project';

function Footer() {
    return (
        <footer>
            <p id='FooterCredits'>Created by Michael M. Shaari using React</p>
            <p id= 'FooterLinks'><a href="https://github.com/mshaari">GitHub</a> | <a href="mailto:michael.shaari@gmail.com">Email</a></p>
        </footer>
    );
}

export default Footer;
