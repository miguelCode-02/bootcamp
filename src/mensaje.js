import { useState } from 'react'
import { Note } from './modulos'

//! Clase numero 1
const Message = ({ color, mensaje }) => {
    return (
        <div>
            <h1 style={{ color: color }}>
                {mensaje}
            </h1>
        </div>
    )
}


//! Clase numero 2
const CounterClick = ({ numero }) => {
    return (<h1>{numero}</h1>)
}

const Counter = () => {
    const [contador, setContador] = useState(0);

    const efectoClick = (evento) => {
        setContador(contador + 1)
    }

    const efectoClickReiniciar = () => {
        setContador(0)
    }

    let esPar = contador % 2 === 0;
    let calcular = esPar ? 'Es par' : 'Es impar'

    return (
        <div>
            <CounterClick numero={contador} />
            <h1>{calcular}</h1>
            <button onClick={efectoClick}>
                incrementar
            </button>
            <button onClick={efectoClickReiniciar}>
                Reiniciar
            </button>
        </div>
    )
}


//! Clase numero 3
const Info = () => (<h1>Porque no haces click?</h1>)

const ArrayWords = ({ array }) => (<h1>{array.join(" - ")}</h1>)


const Clicks = () => {
    const [counter, setCounter] = useState({
        counterLeft: 0,
        counterRight: 0,
        message: 'Hola, estoy vigilando'
    })

    const [clicks, setClicks] = useState([])


    const ClickLeft = () => {
        const newCounterLeft = {
            ...counter,
            counterLeft: (counter.counterLeft + 1),
        }
        setCounter(newCounterLeft)
        setClicks(click => {
            return [...click, 'L']
        })
    }

    const ClickRight = () => {
        const newCounterRight = {
            ...counter,
            counterRight: (counter.counterRight + 1),
        }
        setCounter(newCounterRight)
        setClicks(click => {
            return [...click, 'R']
        })
    }

    return (
        <div>
            <strong style={{ fontSize: "30px" }}>{counter.counterLeft}</strong>
            <button onClick={ClickLeft}>Botonizquierdo</button>
            <button onClick={ClickRight}>Botonderecho</button>
            <strong style={{ fontSize: "30px" }}>{counter.counterRight}</strong>
            <h1>Clic totales: {clicks.length}</h1>
            <div>{clicks.length === 0 ? <Info /> : <ArrayWords array={clicks} />}</div>
        </div>
    )
}


//! Clase numero 4

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

const RenderList = () => {

    if (notes.length === 0) {
        return <h1>No hay nada que mostrar</h1>
    }

    return (
        <div>
            <h1>Notas</h1>
            <ol>
                {notes.map((note) => <Note key={note.id} {...note} />)}
            </ol>
        </div>
    )
}

export { Message, Counter, Clicks, RenderList }