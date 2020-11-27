import React from 'react';
import './todoinput.css';

function InputToDo() {


    return(
        <div id="toDoInput">
            <form>
                <input type="text" class="input" placeholder="input your todo item"></input>
            </form>
        </div>
    );
}

export default InputToDo;