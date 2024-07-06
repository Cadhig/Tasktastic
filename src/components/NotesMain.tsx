import { useState } from "react";
import { Note } from "../interfaces";

export function NotesMain() {
    const [notes, setNotes] = useState<Note[]>([])

    const fetchNotes = async () => {
        if (notes.length > 0) {
            return
        }
        try {
            const response = await fetch(`http://localhost:6002/api/notes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            if (response.ok) {
                const notes = await response.json()
                setNotes(notes)
            } else {
                alert('Failed to retrieve notes');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };
    fetchNotes()
    return (
        <div className="border border-black">
            <p>
                this is main
            </p>
        </div>
    )
}