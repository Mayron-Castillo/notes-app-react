import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props){
    const noteList = [
        {
            id: 1,
            title: "Ir a comprar",
            marked: false
        },
        {
            id: 2,
            title: "Irecordatorio",
            marked: false
        },
        {
            id: 3,
            title: "Pelicula",
            marked: false
        },
        {
            id: 4,
            title: "futbol",
            marked: false
        },
    ]

    const [notes, setNotes] = useState(noteList);

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) =>{
            if(note.id !== updatedNote.id) return note
            return updatedNote
        })

        setNotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{notes, setNotes, updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export {NoteContext, NoteProviderWrapper};