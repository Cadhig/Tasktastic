import { useEffect, useState } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";
import { Menu } from "lucide";

export interface NoteSidebarProps {
    notes: Note[],
    setNotes: (props: Note[]) => void,
    setNoteId: (props: number) => void
}

export function NotesSidebar(props: NoteSidebarProps) {
    const viewSidebar = "h-3/4 w-56 flex gap-4 flex-col border border-black"
    const hideSidebar = "hidden"
    const [showSidebar, setShowSidebar] = useState(viewSidebar)
    useEffect(() => {
        let ignore = false
        if (ignore == false) {
            fetchNotes(props.setNotes)
        }
        return () => { ignore = true }
    }, [])
    return (
        <div className={showSidebar}>
            {props.notes.map((note, index: number) => {
                return <div key={index} className="border border-black w-3/4 rounded h-20" onClick={() => props.setNoteId(note.id)}>
                    <p>{note.title}</p>
                    <p>{note.created_at}</p>
                </div>
            })}
        </div>
    )
}
