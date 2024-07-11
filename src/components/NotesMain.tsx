import { useState, useEffect } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";

export interface NoteMainProps {
    notes: Note[],
    setNotes: (props: Note[]) => void,
    setNoteId: (props: number) => void,
}

export default function NotesMain(props: NoteMainProps & any) {
    function noteById(note: Note) {
        return note.id === props.noteId
    }

    const found = props.notes.find(noteById) || "void"
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    useEffect(() => {
        console.log(found)
        setTitle(found.title)
        setDescription(found.description)
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
                fetchNotes(props.setNotes)
                console.log('res ok')
            } else {
                alert('Failed to update note');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    }

    return (
        <div className="shadow-2xl h-1/2 rounded flex flex-col xl:w-3/4 w-full items-center gap-4 p-4 sm:text-xl">
            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="w-full border border-black/10 hover:border-black/20 rounded p-1 font-bold" />
            <textarea value={description} placeholder="Todos? Grocery list? Whatever your heart desires..." onChange={(e) => setDescription(e.target.value)} className="w-full border border-black/10 hover:border-black/20 h-full rounded p-1" />
            <div className="flex gap-4 text-white">
                <button onClick={() => updateNote()} className="bg-tasktastic-base-2 hover:bg-tasktastic-base-2/90 text-sm p-1 rounded">Update</button>
                <button className="bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active text-sm p-1 rounded" onClick={() => props.noteView(true)}>New Note</button>
            </div>
        </div>
    )
}