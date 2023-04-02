const Note = ({ content, important }) => {
  return (
    <li>
      <h3>{content}</h3>
      <h3>{important.toString()}</h3>
    </li>
  )
}

export { Note }
