import React from 'react';
import Navigation from './/Navigation';

function Header(props) {

    const { currentPage, handlePageChange } = props;

    return (
        <div className='Header'>
            <h1>Michael Shaari</h1>
            < Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    );
}

export default Header;
