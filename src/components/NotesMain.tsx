import { useState, useEffect } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";

export function NotesMain(props: any) {
    function noteById(note: any) {
        return note.id === props.noteId
    }

    const found = props.notes.find(noteById) || 'select a note'
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    useEffect(() => {
        console.log(found)
        setTitle(found.title)
        setDescription(found.description)
        fetchNotes(props.setNotes)
    }, [found])

    let data = {
        title: title,
        description: description
    }
    async function updateNote() {
        try {
            const response = await fetch(`http://localhost:6002/api/notes/${found.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include"
            });

            if (response.ok) {
                console.log('res ok')
            } else {
                alert('Failed to update note');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    }
    return (
        <div className="border border-black">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={() => updateNote()}> test</button>
            {found.description}
        </div>
    )
}