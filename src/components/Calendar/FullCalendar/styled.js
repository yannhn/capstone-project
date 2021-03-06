import styled from 'styled-components';

export const StyleWrapper = styled.div`
	margin: 1em;

	.fc-event {
		border: none;
	}
	.fc-event-title {
		:hover {
			color: #bad;
		}
	}

	.fc-event-today {
		background-color: blue;
	}
	.fc-button-primary {
		border: none;
		background: #343d46;
		cursor: pointer;

		&:hover {
			background: #1a1f24;
		}
	}
	.fc-toolbar-title {
		color: #323232;
		font-size: 1.6rem;
		text-align: center;
	}

	.fc-testButton-button {
		background: #64b6ac;

		&:hover {
			background: #559c93;
		}
	}

	.fc {
		padding: 1em;
		border-radius: 10px;
		background: rgb(255, 255, 255);
		background: linear-gradient(285deg, rgba(255, 255, 255, 1) 0%, rgba(249, 248, 248, 1) 50%);
		box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
	}
`;
