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
        <div className="flex items-center justify-center w-full flex-col h-full">
            <h1 className="text-3xl tasktastic-font text-center text-tasktastic-base">Tasktastic</h1>
            <div className="flex w-full h-full gap-4 items-center justify-center">
                <div className=" flex h-96 absolute left-0">
                    {showSidebar ? <NotesSidebar notes={notes} setNotes={setNotes} setNoteId={setNoteId} /> : null}
                    <Menu onClick={toggleSidebar} className="text-tasktastic-base-2 cursor-pointer hover:text-tasktastic-base-2/80">test</Menu>
                </div>
                <div className="m-4 h-full w-full sm:w-3/4 justify-center items-center flex">
                    <NotesMain notes={notes} noteId={noteId} setNotes={setNotes} />
                </div>
            </div>
        </div>
    )
}