import React from 'react';
import './navbar.css';
import image from './media/Crazy-grayson.jpg';

function NavBar() {
    let num = 0;

    let clickToAddOne = () => {
        num += 1;
        console.log(num);
    }

    return(
        <nav id="navbar">
            <div id="logo">
                <img className="logo-pic" src={image} alt="Grayson"></img>
            </div>
            <div id="title">
                <h1>Used to love gaming</h1>
            </div>
            <div id="navigation">
                <button className="navs" onClick={clickToAddOne}><a href='#'>About</a></button>
                <button className="navs" onClick={clickToAddOne}><a href='#'>Contact</a></button>
                <button className="navs" onClick={clickToAddOne}><a href='#'>Others</a></button>
            </div>
        </nav>
    );
}

export default NavBar