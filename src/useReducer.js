import { useReducer, useState } from "react";

// state = { contador: 0}
// action = { type: string, payload: any }
const initial = { contador: 0 }

// useReducer needs a function in order to work - this function is called reducer
// This reducer function receives two parameters: state and action
const reducer  = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 }
    case 'decrementar':
      return { contador: state.contador - 1 }
    case 'set':
      return { contador: Number(action.payload )}
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial)
  const [valor, setValor] = useState(0)

  return (
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)} />
      <button onClick={()=> dispatch({ type: 'incrementar' })}>Mas</button>
      <button onClick={()=> dispatch({ type: 'decrementar' })}>Menos</button>
      <button onClick={()=> dispatch({ type: 'set', payload: valor })}>Setear</button>
    </div>
  )
}

export default App;
