import './NotesPage.css';
import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { NoteContext } from "../context/note.context";
import NoteCard from "../components/NoteCard";
import CreateNote from '../components/CreateNote';

function NotesPage() {
  const { notes } = useContext(NoteContext); 

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent />
      <section className="notes-page">
        <ul className="note-list">
          <li>
            <CreateNote /> 
          </li>
          {notes.length === 0 ? (
            <h2>No tienes notas aún, crea una!</h2>
          ) : (
            noteCards
          )}
        </ul>
      </section>
    </>
  );
}

export default NotesPage;
