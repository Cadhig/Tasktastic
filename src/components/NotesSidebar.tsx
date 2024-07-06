import { useState, useEffect } from "react";

export function NotesSidebar() {
    const [data, setData] = useState()
    useEffect(() => {
        showNotes();
    }, [])
    const showNotes = async () => {
        try {
            const response = await fetch(`http://localhost:6002/api/notes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            if (response.ok) {
                const data = await response.json()
                setData(data)
                console.log('Login successful');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };
    console.log(data)
    return (
        <NotesSidebarContents />
    )
}

function NotesSidebarContents() {

    return (
        <div className="border border-black">

            <p>
                this is the sidebar
            </p>
        </div>
    )
}