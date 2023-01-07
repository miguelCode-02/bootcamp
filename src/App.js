import './App.css';
import {Message,Counter,Clicks,RenderList} from './mensaje.js'


const notes = [
  {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
      categories: ["i", "you"]
  },
  {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
  },
  {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
  },
]

//console.log('%c👾', 'font-size: 48px; purple: yellow;')

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
        <br/>
        <hr/>
        <RenderList notes={notes}/>
    </div>
  );
}

export default App;
