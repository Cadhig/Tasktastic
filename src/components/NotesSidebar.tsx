import { useEffect } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";

export interface NoteSidebarProps {
    notes: Note[],
    setNotes: (props: Note[]) => void,
    setNoteId: (props: number) => void
}

export function NotesSidebar(props: NoteSidebarProps) {
    useEffect(() => {
        let ignore = false
        if (ignore == false) {
            fetchNotes(props.setNotes)
        }
        return () => { ignore = true }
    }, [])
    return (
        <div>
            {props.notes.map((note, index: number) => {
                return <div key={index} className="border border-black" onClick={() => props.setNoteId(note.id)}>
                    <p>{note.title}</p>
                    <p>{note.created_at}</p>
                </div>
            })}
        </div>
    )
}
