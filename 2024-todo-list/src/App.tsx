import { dummyData } from './data/todos';
import { Todo } from './types/todos';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState(dummyData);

	// function setTodoCompleted(id: number, completed: boolean) {
	// 	//alert(`Todo with ${id} is now ${completed ? 'completed' : 'not completed'}`);
	// 	setTodos((prevTodos) =>
	// 		prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
	// 	);
	// }

	function setTodoCompleted(id: number, completed: boolean) {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
		);
	}

	return (
		<main className="py-10 h-screen space-y-5">
			<h1 className='font-bold text-3xl text-center'>Your Todos</h1>
			<div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 '>
				<div className='space-y-2' >
					{dummyData.map((todo: Todo) => (
						<TodoItem todo={todo} onCompletedChange={setTodoCompleted} key={todo.id} />
						// <p key={todo.id} className='text-lg'>
						// 	{todo.title}
						// </p>

					))}
				</div>
			</div>
		</main>
	)
}

export default App
