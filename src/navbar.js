import React from 'react';
import './navbar.css';

function NavBar() {

    let clickToAddOne = () => {
        let num = 0;
        num++;
    }

    return(
        <nav id="navbar">
            <div id="logo">
                <h1>This is where the logo goes</h1>
            </div>
            <div id="title">
                <h1>This is where the title goes</h1>
            </div>
            <div id="navigation">
                <button onClick={clickToAddOne}>Press the button</button>
                <button onClick={clickToAddOne}>Push the button</button>
                <button onClick={clickToAddOne}>Hold the button</button>
            </div>
        </nav>
    );
}

export default NavBar