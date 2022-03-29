import React from 'react';
import '../App.css';
import LeftPanelHeader from '../components/leftPanel/LeftPanelHeader';
import LeftPanelSearch from '../components/leftPanel/leftPanelSearch';

export default function LeftPanel() {
    return (
        <div id="leftPanel" className="cell">
            <LeftPanelHeader />
            <LeftPanelSearch />
        </div>
    );
}