import {ModalContainer, Modal} from './styled';

//TODO: Button einfügen um Modal zu canceln

export default function HistoryModal({children}) {
	return (
		<ModalContainer>
			<Modal open>
				<section>
					<h2>History</h2>
					<button type="button">Cancel</button>
				</section>
				{children}
			</Modal>
		</ModalContainer>
	);
}
