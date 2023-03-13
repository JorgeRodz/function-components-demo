
import { Component, useState } from 'react';

// * reglas de los hooks:
// - No se llaman en loops, ni condiciones, ni while, etc etc
// - Siempre en el nivel mas alto de la funcion
// - Solo se llaman en:
// -  1 - Componentes de react
// -  2 - Custom hooks
// -      - Cuando se crea un custom hook siempre se antepone la palabra 'use' : useMyCustomHook

// *Custom hook - example*
const useContador = (inicial) => {
  const [count, setCount] = useState(inicial);
  const incrementar = () => {
    setCount(count + 1)
  }

  return [count, incrementar]
}

const App = ({ initialCount }) => {
  const [count, incrementar] = useContador(0)

  return (
    <>
      Count: {count}
      <p>
       <button onClick={incrementar}>  {/*Same as above but here we using a arrow function to execute the state*/}
          +
        </button>
      </p>
    </>
  );
};

export default App;
