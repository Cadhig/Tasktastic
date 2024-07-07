import { NotesSidebar } from "../components/NotesSidebar"
import { NotesMain } from "../components/NotesMain"
import { useState } from "react"
import { Note } from "../interfaces"
export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([])

    return (
        <div>
            <NotesSidebar notes={notes} setNotes={setNotes}/>
            <NotesMain notes={notes}/>
        </div>
    )
}