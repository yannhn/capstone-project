import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FoodCard from './';

describe('FoodCard component', () => {
	it('should render FoodCard component', () => {
		const text = 'Click me';
		render(<Button>{text}</Button>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
});

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		const text = 'Click me';
		render(<Button onClick={handleClick}>{text}</Button>);
		const button = screen.getByText(text);
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
