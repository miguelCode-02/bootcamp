import { useState } from 'react'

const Message = ({ color, mensaje }) => {
    console.log({ color, mensaje })

    return (
        <div>
            <h1 style={{ color: color }}>
                {mensaje}
            </h1>
        </div>
    )
}

const CounterClick = ({ numero }) => {
    return (<h1>{numero}</h1>)
}

const Counter = () => {
    const [contador, setContador] = useState(0);

    const efectoClick = (evento) => {
        console.log(evento)
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

const Info = () => (<h1>Estas perdido? no hay nada por aqui</h1>)

const ArrayWords = ({array}) => (<h1>{array.join(" - ")}</h1>)


const Clicks = () => {
    const [counter, setCounter] = useState({
        counterLeft: 0,
        counterRight: 0,
        message: 'Hola, estoy vigilando'
    })

    const [clicks, setClicks] = useState([])


    const ClickLeft = () =>{
        const newCounterLeft = {
            ...counter,
            counterLeft : (counter.counterLeft + 1),
        }
        setCounter(newCounterLeft)
        setClicks(click => {
         return [...click, 'L']
        })
    }

    const ClickRight = () => {
        const newCounterRight = {
            ...counter,
            counterRight:(counter.counterRight + 1),
        }
        setCounter(newCounterRight)
        setClicks(click => {
        return [...click, 'R']
        })
    }

    return (
        <div>
            <strong style={{fontSize:"30px"}}>{counter.counterLeft}</strong>
            <button onClick={ClickLeft}>Botonizquierdo</button>
            <button onClick={ClickRight}>Botonderecho</button>
            <strong style={{fontSize:"30px"}}>{counter.counterRight}</strong>
            <h1>Clic totales: {clicks.length}</h1>
            <div>{clicks.length === 0 ? <Info/> : <ArrayWords array={clicks}/>}</div>
        </div>
    )
}

export { Message, Counter, Clicks }