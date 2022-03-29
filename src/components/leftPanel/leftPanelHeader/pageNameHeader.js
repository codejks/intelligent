import React from 'react';
import '../CSS/LeftPanel.css';
import SitemapToolbarButton from './sitemapToolbarButton';
export default function pageNameHeader() {
    const pageNameHeader = 'Home';
    return (
        <div className='pageNameHeader'>
                {pageNameHeader}
            <SitemapToolbarButton />
        </div>
    );
}