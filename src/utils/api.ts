import { Note } from "../types";

export async function fetchNotes(callback: (notes: Note[]) => void) {
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
            callback(notes)
        } else {
            alert('Failed to retrieve notes');
        }
    } catch (error) {
        alert('Error: ' + error);
    }
};
