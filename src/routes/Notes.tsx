import { NotesSidebar } from "../components/NotesSidebar"
import { NotesMain } from "../components/NotesMain"
import { useState } from "react"
import { Note } from "../types"
import { Menu } from "lucide-react";
export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([])
    const [noteId, setNoteId] = useState<number | undefined>()
    const [showSidebar, setShowSidebar] = useState(true)

    function toggleSidebar() {
        setShowSidebar(!showSidebar);
    }


    return (
        <div className="flex w-full h-full gap-4 items-center">
            <div className=" flex w-1/2 h-96">
                {showSidebar ? <NotesSidebar notes={notes} setNotes={setNotes} setNoteId={setNoteId} /> : null}
                <Menu onClick={toggleSidebar}>test</Menu>
            </div>
            <div className="absolute">
                <NotesMain notes={notes} noteId={noteId} setNotes={setNotes} />
            </div>
        </div>
    )
}