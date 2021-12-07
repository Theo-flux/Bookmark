import styled from 'styled-components'
import NavButton from './NavButton'

const ItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30%;
	min-width: 400px;


	@media (max-width: 767px){
		& {
			position: absolute;
			top: -3000%;
			left: 0;
			width: 100%;
			height: 100vh;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			padding-top: 4em;
			background-color: var(--Very-Dark-Blue);
			border: 1px solid magenta;
			min-width: 0px;
			z-index: 1
		}
	}
`

const Item = styled.a`
	font-size: .875rem;
	font-weight: 300;
	transition: .3s all ease-in-out;

	&:hover {
		color: var(--Soft-Red);
		cursor: pointer;
		font-weight: 400;
	}

	@media (max-width: 767px){
		& {
			color: #fff;
			font-size: 1.125rem;
			font-weight: 400;
			padding: 1em 0;
			text-transform: uppercase;
			text-align: center;
			width: 85%;
			border-top: 1px solid #ffffff30;
			letter-spacing: .2em;
		}

		&:last-of-type {
			border-bottom: 1px solid #ffffff30;
		}
	}
`

export default function NavItems(props) {
	return(
		<ItemContainer ref={props.listener}>
			<Item>Features</Item>
			<Item>Pricing</Item>
			<Item>Contact</Item>
			<NavButton text='LOGIN' />
		</ItemContainer>
	)
}
