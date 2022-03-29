import React from 'react';
import './CSS/LeftPanel.css';
import SearchBox from './leftPanelSearchBox/SearchBox';
import SiteMapTreeBox from './leftPanelSearchBox/SiteMapTreeBox';

export default function leftPanelSearch() {
    return (
        <div id='sitemapTreeContainer' style={{height:'867px'}}>
            <SearchBox/>
            <SiteMapTreeBox />
        </div>
    );
}