import { ChangeEvent, useState } from 'react'
import { Note } from "../../src/@types/Note"

interface FormularioProps {
  notes: Note[],
}

export function Formulario({ notes }: FormularioProps ) {
  const [search, setSearch] = useState('')

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  } 

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.includes(search))
    : notes

    return (
        <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..."  
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500" 
          onChange={handleSearch}
        />
      </form>
    )
}