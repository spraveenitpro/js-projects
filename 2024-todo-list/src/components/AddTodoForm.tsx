
import { useState } from 'react';

interface AddTodoFormProps {
	
}


export default function AddTodoForm() {

	const [input, setInput] = useState('');

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("Form Submitted", input);
		if (!input.trim()) return;

	}
	return (
		<form className="flex" onSubmit={handleSubmit}>
			<input
				value={input}
				onChange={e => setInput(e.target.value)}
				type="text"
				className='rounded-s-md grow border border-gray-400 p-2'
				placeholder='Add a new todo' />
			<button
				className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
				type="submit">
				Add
			</button>
		</form>
	)
}
