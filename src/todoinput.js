import React from 'react';
import './todoinput.css';

function InputToDo() {


    return(
        <div id="toDoInput">
            <form id="inputForm">
                <input type="text" class="input" placeholder="input your todo item"></input>
                <input type="submit" class="submit"></input>
            </form>
        </div>
    );
}

export default InputToDo;