import React from 'react';

function Footer() {
    return (
        <footer>
            {/* <div className='FooterElements'>
                <ul>
                    <a href="#https://github.com/mshaari">GitHub</a>
                </ul>
                <ul>
                    <a href="mailto:michael.shaari@gmail.com">Email</a>
                </ul>
                <ul>
                    <a href="https://www.linkedin.com/in/michael-shaari/">LinkedIn</a>
                </ul>
            </div> */}

            <ul className='FooterElements'>
                <li>
                    <a href="#https://github.com/mshaari">GitHub</a>
                </li>

                <li>
                    <a href="mailto:michael.shaari@gmail.com">Email</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/michael-shaari/">LinkedIn</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
