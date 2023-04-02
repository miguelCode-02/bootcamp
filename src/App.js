import './App.css'
import { Message, Counter, Clicks, RenderList } from './mensaje.js'

// console.log('%c👾', 'font-size: 48px; purple: yellow;')

function App () {
  return (
    <div className='App'>
      <Message color='red' mensaje='Estamos trabajando' />
      <Message color='orange' mensaje='Para mejorar esta aplicacion' />
      <Message color='purple' mensaje='Asi que quedate ahi' />
      <hr />
      <Counter />
      <br />
      <hr />
      <Clicks />
      <br />
      <hr />
      <RenderList />
    </div>
  )
}

export default App
