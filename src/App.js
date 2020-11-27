import React from 'react';
import navBar from './navbar';

const sayHello = () => {
  console.log("Hello");
}



function app() {
  return(
    <main>
      <nav>
        <navBar />
      </nav>

      <article>
        <h1>Hello React</h1>
        <button onClick={sayHello}>Hello</button>
      </article>
    </main>
  );
}

export default app;