import React from 'react';

function Navigation(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <nav className='Navigation'>
            <ul>
                <a href="#about" onClick={() => handlePageChange("About") } className={ currentPage === "About" ? "nav-item-active" : "nav-item"}>About</a>
            </ul>
            <ul>
                <a href="#portfolio" onClick={() => handlePageChange("Portfolio") } className={ currentPage === "Portfolio" ? "nav-item-active" : "nav-item"}>Portfolio</a>
            </ul>
            <ul>
                <a href="#contact" onClick={() => handlePageChange("Contact") } className={ currentPage === "Contact" ? "nav-item-active" : "nav-item"}>Contact</a>
            </ul>
            <ul>
                <a href="#resume" onClick={() => handlePageChange("Resume") } className={ currentPage === "Resume" ? "nav-item-active" : "nav-item"}>Resume</a>
            </ul>
        </nav>
    );
}

export default Navigation;
