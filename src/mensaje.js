const Mensaje = (props) => {
    console.log(props)
    return (
        <div>
            <h1 style={{ color: props.color }}>
                {props.mensaje}
            </h1>
        </div>
    )
}

export default Mensaje