import React from 'react';
import './navBar.css'

const NavBar = () => {
    return (
        <nav className="navBar navbar-expand-lg">
            <div>Clicky Game</div>
            <div>Click an image to begin </div>
            <div>Score: 0 | Top Score:0</div>
        </nav>
    );
};

export default NavBar;