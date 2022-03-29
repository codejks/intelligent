import React from 'react';
import '../CSS/LeftPanel.css';
import '../../../assets/images/LeftPanel/share.png';
export default function sitemapToolbarButton() {

    function openLink() {
        let pageUrl = 'https://github.com/codejks/intelligent';
        document.location.href = pageUrl;
    }

    function openHighlight() {
        let pageUrl = 'https://intelligent-platform.vercel.app/';
        document.location.href = pageUrl;
    }
    return (
        <div className='pageButtonHeader'>
            <a href='{#!}' id='linksButton' title='Get Links' className='sitemapToolbarButton' onClick={openLink}><span></span></a>
            <a href='{#!}' id='highlightInteractiveButton' title='Highlight Interactive Button' className='sitemapToolbarButton' onClick={openHighlight}><span></span></a>
        </div>
    );
}