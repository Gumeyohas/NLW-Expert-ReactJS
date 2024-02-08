import logo from './assets/logo.svg'
import { Formulario } from './components/formulario'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import { useState } from "react"
import { Note } from "../src/@types/Note"

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('Notes')
    
    if (notesOnStorage){
      return JSON.parse(notesOnStorage)
    }

    return[]
  }) 
  
  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: content
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('Notes', JSON.stringify(notesArray))
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <Formulario notes={ notes } />

    <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]"> 
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes.map(note => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}


