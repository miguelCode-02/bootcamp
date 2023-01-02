import './App.css';
import Mensaje from './mensaje.js'


function App() {
  return (
    <div className="App">
        <Mensaje color='red' mensaje='Estamos trabajando'/>
        <Mensaje color='orange' mensaje='Para mejorar esta aplicacion' />
        <Mensaje color='purple' mensaje='Asi que quedate ahi'/>
    </div>
  );
}

export default App;
