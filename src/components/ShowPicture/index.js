import StyledPicture from './styled';

export default function ShowPicture({submittedImg}) {
	return (
		<>
			<StyledPicture src={submittedImg} />
		</>
	);
}
