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
                <img className="logo-pic" src="../../Pictures/Kelly photo frame/Grayson.jpg" alt="Grayson"></img>
            </div>
            <div id="title">
                <h1>Used to love gaming</h1>
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