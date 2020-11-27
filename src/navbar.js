import React from 'react';
import './navbar.css';

function NavBar() {
    let num = 0;

    let clickToAddOne = () => {
        num += 1;
        console.log(num);
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
                <button className="navs" onClick={clickToAddOne}>Press the button</button>
                <button className="navs" onClick={clickToAddOne}>Push the button</button>
                <button className="navs" onClick={clickToAddOne}>Hold the button</button>
            </div>
        </nav>
    );
}

export default NavBar