import { useEffect, useState } from "react";
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
        <div className="bg-purple-700 flex flex-col gap-2 p-4 overflow-auto">
            {props.notes.map((note, index: number) => {
                return <div key={index} className="border border-black rounded h-8 w-32 flex items-center" onClick={() => props.setNoteId(note.id)}>
                    <p className="truncate">{note.title}</p>
                </div>
            })}
        </div>
    )
}
