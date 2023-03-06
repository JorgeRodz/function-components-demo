const funcImpura = () => new Date().toLocaleString();
console.log(funcImpura());

const MiComponente = ({ miProp }) => {
  return <div>Nombre: {miProp}</div>;
};

const App = () => {
  return <MiComponente miProp={'lalala'} />;
};

export default App;
