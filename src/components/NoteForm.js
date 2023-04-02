import { useState } from "react"
import Togglable from "./Togglable"

export default function RenderCreateNoteForm ({ addNote, handleLogout }) {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newNoteAddNew = {
      content: newNote,
      important: Math.random() > 0.5
    }
    addNote(newNoteAddNew)
    setNewNote('')
  }
  return (
    <Togglable buttoLabel='Show form'>
      <h3>Crear nueva nota</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='crear tu nota'
          type='text'
          onChange={handleChange}
          value={newNote}
        />
        <button>Crear nota</button>
      </form>
      <div>
        <button onClick={handleLogout}>Cerrar session</button>
      </div>
    </Togglable>
  )
}
