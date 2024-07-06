import { useState, useEffect } from "react";

interface Note {
    created_at: string,
    description: string,
    title: string,
    updated_at: string
}
export function NotesSidebar() {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        let ignore = false;
        if (ignore === false) {
            fetchNotes();
        }
        return () => { ignore = true }
    }, [])

    const fetchNotes = async () => {
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
                console.log('Login successful');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };
    return (
        <div>
            {notes.map((note, index) => {
                return <div key={index} className="border border-black">
                    <p>{note.title}</p>
                    <p>{note.created_at}</p>
                </div>
            })}
        </div>
    )
}
