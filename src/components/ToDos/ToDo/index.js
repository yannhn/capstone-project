import {Icon} from '@iconify/react';
import {useState} from 'react';

import {
	ToDoItemContainer,
	ToDoItem,
	ToDoButtonGroup,
	DeleteButton,
	ToDoInputSection,
} from './styled';

export default function ToDo({
	id,
	title,
	editTask,
	completeToDo,
	deleteToDo,
	completed,
	urgentToDo,
	urgent,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		editTask(id, newTitle);
		setIsEditing(false);
	}

	return (
		<>
			{isEditing ? (
				<ToDoItemContainer>
					<form onSubmit={handleSubmit}>
						<label htmlFor="new-text-input" />
						<input
							id="new-text-input"
							type="text"
							defaultValue={title}
							required
							onChange={event => setNewTitle(event.target.value)}
						/>
						<section>
							<button
								type="button"
								onClick={() => {
									setIsEditing(false);
									setNewTitle('');
								}}
							>
								Cancel editing {title}
							</button>
							<button type="submit">Save new title for {title}</button>
						</section>
					</form>
				</ToDoItemContainer>
			) : (
				<ToDoItemContainer>
					{completed ? (
						<ToDoItem>
							<ToDoInputSection>
								<label htmlFor="checkbox" />
								<input
									id="checkbox"
									type="checkbox"
									defaultChecked="true"
									onChange={completeToDo}
								/>
								{title}
							</ToDoInputSection>
							<DeleteButton onClick={deleteToDo}>
								<Icon icon="mdi:delete" width="2rem" height="2rem" color="white" />
							</DeleteButton>
						</ToDoItem>
					) : (
						<ToDoItem>
							<label htmlFor="checkbox" />
							<input id="checkbox" type="checkbox" onChange={completeToDo} />
							{title}
							<ToDoButtonGroup>
								<button onClick={() => setIsEditing(true)}>Edit</button>
								<button onClick={deleteToDo}>Delete</button>
								<button onClick={urgentToDo}>
									{urgent
										? 'not so urgent / blue after styling'
										: 'urgent / red after styling'}
								</button>
							</ToDoButtonGroup>
						</ToDoItem>
					)}
				</ToDoItemContainer>
			)}
		</>
	);
}
