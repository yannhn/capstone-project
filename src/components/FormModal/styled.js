import styled from 'styled-components';

const ModalContainer = styled.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.dialog`
	position: fixed;
	z-index: 2;
	top: 30%;
	width: 90%;
	margin: 0 auto;
	padding: 1.4em;
	overflow-y: auto;
	transform: translate(0, -30%);
	border: none;
	border-radius: 5px;
	background: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
	color: #343d46;
`;

export {ModalContainer, Modal};
