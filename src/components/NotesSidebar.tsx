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
        <div className="border bg-white lg:border-none border-black/20 w-1/2 xl:w-full rounded flex flex-col gap-2 p-4 items-center text-white sm:text-xl">
            <h1 className="text-tasktastic-base/80 text-center font-bold">My Notes</h1>
            <div className="overflow-auto flex flex-col gap-2 w-full items-center">
                {props.notes.map((note: any, index: number) => {
                    function noteButton() {
                        props.setNoteId(note.id)
                        console.log('work')
                        props.noteView(false)
                    }
                    return <span key={index} className=" bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active flex items-center rounded h-8 w-full text-md p-2" onClick={() => noteButton()}>
                        <p className="truncate cursor-pointer">{note.title}</p>
                    </span>
                })}
            </div>
        </div>
    )
}
