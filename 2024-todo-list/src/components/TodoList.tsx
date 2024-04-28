import { Todo } from '../types/todos'
import TodoItem from './TodoItem'

interface TodoListProps {
	todos: Todo[];
	onCompletedChange: (id: number, completed: boolean) => void
	onDelete: (id: number) => void
}

export default function TodoList({
	todos,
	onCompletedChange,
	onDelete

}: TodoListProps) {

	const todoSorted = todos.sort((a, b) => {
		// Sort the todo list
		if (a.completed == b.completed) {
			return b.id - a.id
		}
		return a.completed ? 1 : -1
	})


	return (
		<div className='space-y-2' >
			<>
				{todoSorted.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						onCompletedChange={onCompletedChange}
						onDelete={onDelete}
					/>

				))}
				{todos.length === 0 && (
					<p className='text-center text-sm text-gray-500'>
						Enter some todo in the form
					</p>
				)}
			</>
		</div>
	)
}
