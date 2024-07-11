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
        <div className="bg-white/80 rounded flex flex-col gap-2 p-4 overflow-auto text-white sm:text-xl">
            <h1 className="text-tasktastic-base/80 text-center font-bold">My Notes</h1>
            {props.notes.map((note, index: number) => {
                return <div key={index} className="bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active rounded h-8 w-32 flex items-center p-2" onClick={() => props.setNoteId(note.id)}>
                    <p className="truncate cursor-pointer">{note.title}</p>
                </div>
            })}
        </div>
    )
}
