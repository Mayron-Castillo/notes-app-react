import { createContext, useEffect, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
    const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem("notes");
        return storedNotes ? JSON.parse(storedNotes) : [];
    });

    // Guardar notas en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]); 

    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, { ...newNote, id: Date.now() }]); 
    };    

    const updateNote = (updatedNote) => {
        setNotes(prevNotes =>
            prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note)
        );
    };

    const deleteNote = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id)); 
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProviderWrapper };

