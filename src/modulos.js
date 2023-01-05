const Note = ({ categories=[], content = "", date = "", important = false }) => {
    return (
        <li>
            <h1>{important ? "Es importante" : "No es importante"}</h1>
            <p>{content}</p>
            <small>
                <time >{date}</time>
            </small>
            <p>{categories.map(categori => <span key={categori}>{categori} </span>)}</p>
        </li>
    )
}

export { Note }