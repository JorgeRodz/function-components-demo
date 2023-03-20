import { Component, useEffect,useState } from 'react';

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

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)

    return () => {
      clearInterval(i)
    }
  }, [contador])

  return   (
    <p>Intervalo</p>
  )
}

const App = ({ initialCount }) => {
  const [count, incrementar] = useContador(0)

  useEffect(() => {
    document.title = count
    console.log('soy un efecto')
  }, [count])

  return (
    <>
      Count: {count}
      <p>
       <button onClick={incrementar}>  {/*Same as above but here we using a arrow function to execute the state*/}
          Incrementar
        </button>
      </p>
      <Interval contador={count} />
    </>
  );
};

export default App;
