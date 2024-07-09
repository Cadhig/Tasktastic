import { NotesSidebar } from "../components/NotesSidebar"
import { NotesMain } from "../components/NotesMain"
import { useState } from "react"
import { Note } from "../types"
export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([])
    const [noteId, setNoteId] = useState<number | undefined>()

    return (
        <div className="flex w-full h-full gap-4 items-center">
            <NotesSidebar notes={notes} setNotes={setNotes} setNoteId={setNoteId} />
            <NotesMain notes={notes} noteId={noteId} setNotes={setNotes} />
        </div>
    )
}