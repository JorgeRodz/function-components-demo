import { useState } from 'react';

// * reglas de los hooks:
// - No se llaman en loops, ni condiciones, ni while, etc etc
// - Siempre en el nivel mas alto de la funcion
// - Solo se llaman en:
// -  1 - Componentes de react
// -  2 - Custom hooks
// -      - Cuando se crea un custom hook siempre se antepone la palabra 'use' : useMyCustomHook

const App = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count: {count}
      <p>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count - 1)}>-</button> "This is the same as the above line" */}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>  {/*Same as above but here we using a arrow function to execute the state*/}
          -
        </button>
        {/* <button onClick={() => setCount(count + 1)}>+</button> "This is the same as the above line" */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </p>
    </>
  );
};

export default App;
