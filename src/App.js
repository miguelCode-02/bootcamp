import './App.css';
import {Message,Counter,Clicks} from './mensaje.js'


function App() {
  return (
    <div className="App">
        <Message color='red' mensaje='Estamos trabajando'/>
        <Message color='orange' mensaje='Para mejorar esta aplicacion' />
        <Message color='purple' mensaje='Asi que quedate ahi'/>
        <hr/>
        <Counter/>
        <br/>
        <hr/>
        <Clicks/>
    </div>
  );
}

export default App;
