import { useState, useEffect } from "react";
import { Note } from "../types";
import { fetchNotes } from "../utils/api";

export default function NewNote(props: any) {

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    let data = {
        title: title,
        description: description
    }
    async function createNewNote() {
        try {
            const response = await fetch(`http://localhost:6002/api/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include"
            });

            if (response.ok) {
                fetchNotes(props.setNotes)
                console.log('res ok')
            } else {
                alert('Failed to update note');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    }

    return (
        <div className="shadow-2xl h-1/2 rounded flex flex-col xl:w-3/4 w-full items-center gap-4 p-4 sm:text-xl">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-black/10 hover:border-black/20 rounded p-1 font-bold" />
            <textarea value={description} placeholder="Todos? Grocery list? Whatever your heart desires..." onChange={(e) => setDescription(e.target.value)} className="w-full border border-black/10 hover:border-black/20 h-full rounded p-1" />
            <div className="flex gap-4 text-white">
                <button onClick={() => createNewNote()} className="bg-tasktastic-base-2 hover:bg-tasktastic-base-2/90 text-sm p-1 rounded">Create</button>
                <button className="bg-tasktastic-base hover:bg-tasktastic-hover active:bg-tasktastic-active text-sm p-1 rounded">New Note</button>
            </div>
        </div>
    )
}