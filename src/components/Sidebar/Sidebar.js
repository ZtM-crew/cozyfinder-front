import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return(
        <div>
            <Menu>
            <a href="/" className="menu-item">Account Settings</a>
                <a href="/" className="menu-item">Favorites</a>
                <a href="/" className="menu-item">Search History</a>
                <a href="/" className="menu-item">Mortgage Calculator</a>
                <a href="/" className="menu-item">Sign Out</a>
            </Menu>
        </div>
    );
}



// Account settings
// Favorites
// Search history
// Mortgage calculator
// Sign out