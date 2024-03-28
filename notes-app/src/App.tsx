
import './App.css';
import { useState } from 'react';

function App() {
	return (

		const [notes, setNotes] = useState<Note[]>([
		{
			id: 1,
			title: "test note 1",
			content: "bla bla note1",
		},
		{
			id: 2,
			title: "test note 2 ",
			content: "bla bla note2",
		},
		{
			id: 3,
			title: "test note 3",
			content: "bla bla note3",
		},
		{
			id: 4,
			title: "test note 4 ",
			content: "bla bla note4",
		},
		{
			id: 5,
			title: "test note 5",
			content: "bla bla note5",
		},
		{
			id: 6,
			title: "test note 6",
			content: "bla bla note6",
		},
	]);

	<div className="AppContainer">
		<form className="note-form" >
			<input placeholder="Title" required />
			<textarea placeholder="Content" rows={10} required />
			<button type="submit">Add Note!</button>
		</form>

		<div className="notes-grid">
			{notes.map((note) => (
				<div className="note-item">
					<div className="notes-header">
						<button>x</button>
					</div>
					<h2>{note.title}</h2>
					<p>{note.content}</p>
				</div>
			))}
		</div>
	</div>


}

export default App;
