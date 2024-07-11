import { useEffect } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";
import { X } from "lucide-react";

export interface NoteSidebarProps {
    notes: Note[],
    setNotes: (props: Note[]) => void,
    setNoteId: (props: number) => void,
}

export function NotesSidebar(props: NoteSidebarProps & any) {
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
            {props.notes.map((note: any, index: number) => {
                function noteButton() {
                    props.setNoteId(note.id)
                    console.log('work')
                    props.noteView(false)
                }
                return <span key={index} className="bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active flex items-center rounded h-8 w-32 text-md p-2" onClick={() => noteButton()}>
                    <p className="truncate cursor-pointer">{note.title}</p>
                </span>
            })}
        </div>
    )
}
