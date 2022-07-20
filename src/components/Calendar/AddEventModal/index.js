import {useState} from 'react';

export default function AddEventModal({onClose, addEvent}) {
	const [title, setTitle] = useState('');
	const [start, setStart] = useState(new Date());
	const [end, setEnd] = useState(new Date());

	const onSubmit = event => {
		event.preventDefault();
		const newEvent = {
			title: title,
			start: start,
			end: end,
		};
		addEvent(newEvent);
		onClose();
	};

	return (
		<>
			<section>
				<form onSubmit={onSubmit}>
					<label>TITLE</label>
					<input
						placeholder="Title"
						value={title}
						type="text"
						onChange={event => setTitle(event.target.value)}
					></input>
					<label>START</label>
					<input
						value={start}
						type="date"
						onChange={event => setStart(event.target.value)}
					></input>
					<label>END</label>
					<input
						value={end}
						type="date"
						onChange={event => setEnd(event.target.value)}
					></input>
					<button>Add event</button>
				</form>
			</section>
		</>
	);
}
