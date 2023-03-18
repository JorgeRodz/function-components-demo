import { Component, useState } from 'react';

// * reglas de los hooks:
// - No se llaman en loops, ni condiciones, ni while, etc etc
// - Siempre en el nivel mas alto de la funcion
// - Solo se llaman en:
// -  1 - Componentes de react
// -  2 - Custom hooks
// -      - Cuando se crea un custom hook siempre se antepone la palabra 'use' : useMyCustomHook

// class App extends Component {
//   state = { contador: 0 }
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 })
//   }
//   decrementar = () => {
//     this.setState({ contador: this.state.contador - 1 })
//   }
//   render() {
//     return (
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//         <button onClick={this.decrementar}>Incrementar</button>
//       </div>
//     )

//   }
// }

const App = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(0)

  return (
    <>
      Count: {count}
      <p>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count - 1)}>-</button> "This is the same as the above line" */}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>  {/*Same as above but here we using a arrow function to execute the state*/}
          -
        </button>
        <button onClick={() => setCount(count + 1)}>+</button> {/*This is the same as the above line*/}
        {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button> */}
      </p>
    </>
  );
};

export default App;
