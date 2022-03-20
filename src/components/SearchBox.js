import React from 'react';

const SearchBox = ({ SearchChange }) => {
    return (
        <div className='pa2' >
            <input type="text" placeholder="search for a robot here" className="pa3 ba b--green bg-lightest-blue" onChange={SearchChange}></input>
        </div>
    );
}

export default SearchBox;