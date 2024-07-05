
export function NotesSidebar() {
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
                const returnedCall = await response.json()
                console.log('Login successful');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            alert('Error: ' + error);
        }
    };
    showNotes()
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

export function NotesMain() {

    return (
        <div className="border border-black">
            <p>
                this is main
            </p>
        </div>
    )
}