import React from 'react';
import NavBar from './navbar';
import ToDoFrom from './todoinput';

let numbers = 0;

const sayHello = () => {
  console.log("Hello");
  console.log(numbers);
  numbers++;
  document.getElementById("clicks").innerHTML = numbers;
}



function app() {
  return(
    <main>
      <nav>
        <NavBar />
      </nav>

      <header>
        <ToDoFrom />
      </header>

      <article>
        <h1>Hello React</h1>
        <button onClick={sayHello}>Hello</button>
        <p>clicks: <a id="clicks">0</a></p>
      </article>
    </main>
  );
}

export default app;