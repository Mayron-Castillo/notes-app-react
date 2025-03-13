import './NotesPage.css'

import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { NoteContext } from "../context/note.context"
import NoteCard from "../components/NoteCard";

function NotesPage() {
  const {notes} = useContext(NoteContext);

  const noteCards = notes.map((note)=>{
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    )
  })

  return (
    <>
    <HeaderComponent></HeaderComponent>

    <section className="notes-page">
      <h2>Notes</h2>
      <ul className="note-list">{noteCards}</ul>
    </section>
    </>
  )
}

export default NotesPage