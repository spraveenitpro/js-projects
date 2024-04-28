
import { Trash } from 'lucide-react';
import { Todo } from '../types/todos';

interface TodoItemProps {
	todo: Todo;
	onCompletedChange: (id: number, completed: boolean) => void;
	onDelete: (id: number) => void;

}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
	return (
		<>
			<div className='flex items-center gap-1'>
				<label className='flex items-center gap-2 border rounded-md border-gray-100 bg-white hover:bg-slate-50 p-2 grow'>
					<input type="checkbox"
						checked={todo.completed}
						onChange={(e) => onCompletedChange(todo.id, e.target.checked)}

						className='scale-125' />
					<span className={todo.completed ? "line-through text-gray-400" : ""}>
						{todo.title}

					</span>
				</label>
				<button
					onClick={() => onDelete(todo.id)}
					className='p-2'>
					<Trash size={20} className='text-gray-500' />
				</button>
			</div>
		</>
	)
}
