
import './App.css';
import { useEffect, useState } from 'react';

type Note = {
	id: number;
	title: string;
	content: string;
}

function App() {

	const [notes, setNotes] = useState<Note[]>([]);



	const handleAddnote = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:4000/api/notes", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, content }),
			});
			const newNote = await response.json();
			setNotes([newNote, ...notes]);
			setTitle("");
			setContent("");

		} catch (error) {
			console.error(error);
		}


	}
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [selectedNote, setSelectedNote] = useState<Note | null>(null);

	useEffect(() => {
		const fetchNotes = async () => {
			try {
				const response = await fetch("http://localhost:4000/api/notes");
				const notes: Note[] = await response.json();
				setNotes(notes);
			} catch (error) {
				console.error(error);
			}
		}
		fetchNotes();
	}, [])


	const handleNoteClick = (note: Note) => {
		setSelectedNote(note);
		setTitle(note.title);
		setContent(note.content);
	}

	const handleUpdateNote = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!selectedNote) {
			return;
		}

		try {

			const response = await fetch(`http://localhost:4000/api/notes/${selectedNote.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, content }),
			})

			const updatedNote = await response.json();
			const updatedNotesList = notes.map((note) =>
				note.id === selectedNote.id ? updatedNote : note
			)
			setNotes(updatedNotesList);
			setTitle("");
			setContent("");
			setSelectedNote(null);

		} catch (error) {
			console.error(error);
		}
	}

	const handleCancel = () => {
		setTitle("");
		setContent("");
		setSelectedNote(null);
	}

	const deleteNote = async (event: React.MouseEvent, noteId: number) => {
		console.log("delete note", noteId);
		event.stopPropagation();

		try {
			await fetch(`http://localhost:4000/api/notes/${noteId}`, {
				method: "DELETE",
			});
			const updatedNotesList = notes.filter(
				(note) => note.id !== noteId);
			setNotes(updatedNotesList);

		} catch (error) {
			console.error(error);
		}




	}



	return (


		<div className="app-container">
			<form className="note-form" onSubmit={(event) =>
				selectedNote ? handleUpdateNote(event) : handleAddnote(event)
			}>
				<input placeholder="Title" required value={title} onChange={(event) => setTitle(event.target.value)} />
				<textarea placeholder="Content" rows={10} required value={content} onChange={(event) => setContent(event.target.value)} />

				{selectedNote ? (
					<div className="edit-buttons">
						<button type="submit">Save</button>
						<button onClick={handleCancel}>Cancel</button>
					</div>
				) : (
					<button type="submit">Add Note!</button>

				)}

			</form>

			<div className="notes-grid">
				{notes.map((note) => (
					<div className="note-item" key={note.id} onClick={() => handleNoteClick(note)}>
						<div className="notes-header">
							<button onClick={(event) => deleteNote(event, note.id)}>x</button>
						</div>
						<h2>{note.title}</h2>
						<p>{note.content}</p>
					</div>
				))}
			</div>
		</div>

	)
}

export default App;
