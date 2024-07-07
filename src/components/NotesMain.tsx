import { useState } from "react";
import { Note } from "../types";

export function NotesMain(props: any) {
    function noteById(note: any) {
        return note.id === props.noteId
    }

    const found = props.notes.find(noteById) || 'select a note'
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    console.log(props.notes)

    console.log(found)
    return (
        <div className="border border-black">
            <input type="text" defaultValue={found.title} onChange={(e) => setTitle(e.target.value)} />
            <textarea defaultValue={found.description} onChange={(e) => setDescription(e.target.value)}></textarea>
            {found.description}
        </div>
    )
}