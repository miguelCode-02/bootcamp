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

const RenderList = (props) => {

    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Nota creada');
        const newNoteAddNew = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        }

        const newNoteAdd = notes.concat(newNoteAddNew)
        setNotes(newNoteAdd)
        setNewNote("")
    }

    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    if (notes.length === 0) {
        return <h1>No hay nada que mostrar</h1>
    }

    return (
        <div>
            <h1>Notas</h1>
            <button onClick={handleShowAll}>{showAll ? 'Mostrar todo' : 'Solo importante'}</button>
            <ol>
                {notes.filter(note => {
                    if (showAll === true) return note
                    return note.important === false
                }).map(note => <Note key={note.id} {...note} />)}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type={'text'} onChange={handleChange} value={newNote} />
                <button >Crear nota</button>
            </form>
        </div>
    )
}

export { Message, Counter, Clicks, RenderList }