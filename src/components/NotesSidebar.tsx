import { Note } from "../interfaces";

export function NotesSidebar(props: any) {

    const fetchNotes = async () => {
        if (props.notes.length > 0) {
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
                props.setNotes(notes)
            } else {
                alert('Failed to retrieve notes');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };
    fetchNotes()
    return (
        <div>
            {props.notes.map((note: Note, index:number) => {
                return <div key={index} className="border border-black">
                    <p>{note.title}</p>
                    <p>{note.created_at}</p>
                </div>
            })}
        </div>
    )
}
