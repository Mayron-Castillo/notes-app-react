import { useContext } from "react";
import "./NoteCard.css"
import { NoteContext } from "../context/note.context";

function NoteCard({note}) {
    const {updateNote, deleteNote} = useContext(NoteContext);

    const handleInput = (e) =>{
        const updatedNote = {...note, title: e.target.value}
        updateNote(updatedNote);
    }

    const handleCheck = () =>{
        const updatedNote = {...note, marked: !note.marked}
        updateNote(updatedNote);
    }

    const handleDelete = () => {
        deleteNote(note.id); 
    };

    return (
        <article className={`note-card ${note.marked ? 'marked' : ''}`} >
            <input type="text" className="card-title" value={note.title} onChange={handleInput}/>
            <div className="div-buttons">
                <button className="note-buttons" onClick={handleCheck}>✅</button>
                <button className="note-buttons" onClick={handleDelete}>🗑️</button>
            </div>
        </article>
    );
}

export default NoteCard