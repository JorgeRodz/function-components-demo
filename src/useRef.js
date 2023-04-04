import { useRef } from 'react';

const App = () => {
  const inputRef = useRef()
  const lalaRef = useRef()

  const click =  () => {
    console.log("This is the current height of the element:", lalaRef.current.clientHeight)
    console.log(lalaRef)
    lalaRef.current.innerHTML = 'Chanchito feliz'
  }
  const getFocused = () => {
    inputRef.current.focus()
  }
  const changeBg = () => {
    lalaRef.current.style.backgroundColor = '#63efff'
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={getFocused}>Focus</button>
      <div onClick={click} ref={lalaRef}>Lala</div>
      <button onClick={changeBg}>Change BG color of lalaRef</button>
    </div>
  )
}

export default App;
