import { useEffect, useState } from 'react'
import { Note } from './modulos'
import {getAll, create, setToken} from './services/notes/getAllNotes.js'
import loginService from './services/notes/login'

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


//! Clase numero 4 & 5

const RenderList = () => {

    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)

    const [username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')

    useEffect(() => {
        setLoading(true)
        getAll().then((notes) => {
            setNotes(notes)
            setLoading(false)
        })

    }, [filter])

    useEffect(() => {
        const loggedUserJson = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJson) {
            const user = JSON.parse(loggedUserJson)
            setUser(user)
            setToken(user.token)
        }
    }, [])

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const newNoteAddNew = {
            content: newNote,
            important: Math.random() > 0.5
        }

        setNotes((prevNotes) => prevNotes.concat({...newNoteAddNew, id: 0}))

        create(newNoteAddNew).then(() => {
            alert("Nota guardada")
        }).catch((error)=>{
            alert(`No se pudo guardar tu nota: \n${error.message}\n${error.code}`)
            setError("BOOM me he reventado chaval :C")
        })

        setNewNote("")
    }

    const handleLoginSubmit = async (event) =>{
        event.preventDefault()
        try {
            const user = await loginService.login({username, password})

            window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))
            setToken(user.token)

            setUser(user)
            setUsername('')
            setPassword('')

        } catch (error) {
            setError(error.message)
            setTimeout(() => {setError(null)},3000)
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedNoteAppUser')
        setUser(null)
        setToken(null)
    }

    const renderLoginForm = () =>(
        <form onSubmit={handleLoginSubmit}>
        <div>
        <input
            type={'text'}
            value={username}
            placeholder='Username'
            name='Username'
            onChange={({target}) => setUsername(target.value)}>
        </input>
        </div>
        <div>
        <input
            type={'password'}
            value={password}
            placeholder='Password'
            name='Password'
            onChange={({target}) => setPassword(target.value)}>
        </input>
        </div>
        <button>login</button>
    </form>
    )

    const renderCreateNote = () => (
        <div>
            <form onSubmit={handleSubmit}>
            <input placeholder='crear tu nota' type={'text'} onChange={handleChange} value={newNote} />
            <button >Crear nota</button>
            </form>
            <div>
                <button onClick={handleLogout}>Cerrar session</button>
            </div>
        </div>
    )



    const handleFilter = (event) => setFilter(event.target.value)


    return (
        <div>
            <h1>Notas</h1>
            {
                user ?  renderCreateNote() : renderLoginForm()
            }
            <br/>
            {error ? <p style={{color : 'red'}}>{error}</p> : ""}
            <input  type={'text'} onChange={handleFilter} placeholder='Filtrador de notas'></input>
            <p>{loading ? "Cargando...." : ""}</p>
            <ol style={{ textAlign: "center" }}>
                {notes.filter((note) => {
                    return note.content.startsWith(filter)
                }).map(note => <Note key={note.id} {...note} />)}
            </ol>
        </div>
    )
}

export { Message, Counter, Clicks, RenderList }