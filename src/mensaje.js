const Mensaje = ({color, mensaje}) => {
    console.log({color : color, mensaje : mensaje})
    return (
        <div>
            <h1 style={{ color: color }}>
                {mensaje}
            </h1>
        </div>
    )
}

export default Mensaje