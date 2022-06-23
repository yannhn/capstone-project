import {useState} from 'react';

export default function InputFood() {
	const [showFormContainer, setShowFormContainer] = useState(false);
	const handleCloseForm = () => {
		setShowFormContainer(!showFormContainer);
	};
	return (
		<>
			<form>
				<h4>Your dog</h4>
				<section>
					<label>
						How many gram did the dog eat
						<input type="text"></input>
					</label>
				</section>
				<section>
					<label>
						When did the dog eat
						<input type="time" defaultValue="08:00"></input>
					</label>
				</section>
				<button onClick={handleCloseForm}>Cancel</button>
				<button>Add</button>
			</form>
		</>
	);
}