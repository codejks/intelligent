import React from 'react';
import './CSS/LeftPanel.css';
import PluginNameHeader from './leftPanelHeader/pluginNameHeader'
import PageNameHeader from './leftPanelHeader/pageNameHeader';

export default function LeftPanelHeader() {
    return (
        <div id='siteMapHeader'>
            <PluginNameHeader />
            <PageNameHeader />
        </div>
    );
}