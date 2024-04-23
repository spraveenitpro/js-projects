import { dummyData } from './data/todos';
import { Todo } from './types/todos';
import TodoItem from './components/TodoItem';

function App() {

	return (
		<main className="py-10 h-screen space-y-5">
			<h1 className='font-bold text-3xl text-center'>Your Todos</h1>
			<div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 '>
				<div className='space-y-2' >
					{dummyData.map((todo: Todo) => (
						<TodoItem todo={todo} />
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
