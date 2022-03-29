import React from 'react';
import '../CSS/LeftPanel.css';

export default function SearchBox() {
    return (
        <div className='searchDiv'>
            <input id='searchBox' type='text' className='searchBoxHint' placeholder='search'/>
        </div>
    );
}