import {useState} from 'react';

import FormModal from '../FormModal';
import InputFood from '../InputFood/index.js';

import {FoodCardContainer, FoodCardButton, FoodInfoContainer, FoodCardHead} from './styled';

export default function FoodCard() {
	const [foodItems, setFoodItems] = useState([]);
	const [showForm, setShowForm] = useState(false);

	function addNewFoodItem(prevItem) {
		const newFoodItems = [...foodItems, prevItem];
		setFoodItems(newFoodItems);
	}

	return (
		<>
			<FoodCardContainer>
				<FoodCardHead>
					<section>
						<h2>Food</h2>
						<h3>Type of food</h3>
					</section>
					<FoodCardButton
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						{showForm ? '-' : '+'}
					</FoodCardButton>
				</FoodCardHead>
				{foodItems.map(item => (
					<FoodInfoContainer key={item.id}>
						<p>How much: {item.amount} gram</p>
						<p>At: {item.time}</p>
					</FoodInfoContainer>
				))}
			</FoodCardContainer>
			{showForm && (
				<FormModal>
					<InputFood
						addNewFoodItem={addNewFoodItem}
					></InputFood>
				</FormModal>
			)}
		</>
	);
}
