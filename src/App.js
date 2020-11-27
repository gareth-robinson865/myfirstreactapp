import React from 'react';

const sayHello = () => {
  console.log("Hello");
}



function app() {
  return(
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Hello</button>
    </div>
  );
}

export default app;