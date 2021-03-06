import {nanoid} from 'nanoid';
import {useState} from 'react';

import {
	GoalForm,
	InputGoalHeader,
	InputGoalSection,
	InputGoalLabel,
	InputGoalAmount,
	InputGoalButtonGroup,
	AddButton,
	LastSubmitSection,
	LastSubmitHeading,
	LastSubmitText,
} from './styled';

export default function InputGoalForm({onCancelGoalForm, addNewFoodGoal}) {
	const [amount, setAmount] = useState(0);
	const [message, setMessage] = useState('');

	const submitHandler = event => {
		event.preventDefault();

		const newAmount = {
			id: nanoid(),
			amount: amount,
		};
		addNewFoodGoal(newAmount);
		setMessage(
			`Your new food-goal for today is reach to ${newAmount.amount} gram. You can do this!`
		);
	};

	return (
		<>
			<GoalForm onSubmit={submitHandler}>
				<InputGoalHeader>How much food should your dog eat today?</InputGoalHeader>
				<InputGoalSection>
					<InputGoalLabel htmlFor="enterAmount">
						Input your goal amount in gram
					</InputGoalLabel>
					<InputGoalAmount
						id="enterAmount"
						type="number"
						value={amount}
						min="0"
						onChange={event => setAmount(event.target.value)}
					/>
				</InputGoalSection>
				<InputGoalButtonGroup>
					<AddButton type="submit">add</AddButton>
				</InputGoalButtonGroup>
			</GoalForm>
			{message && (
				<LastSubmitSection>
					<LastSubmitHeading>New goal!</LastSubmitHeading>
					<LastSubmitText>{message}</LastSubmitText>
				</LastSubmitSection>
			)}
		</>
	);
}
