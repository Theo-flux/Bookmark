import styled from 'styled-components'

const Navbutton = styled.button`
	
	background-color: var(--Soft-Red);
	border: 1px solid var(--Soft-Red);
	border-radius: 4px;
	color: #fff;
	padding: .5em 2em;
	transition: .4s all linear;

	&:hover {
		background-color: transparent;
		color: var(--Soft-Red);
	}

	@media (max-width: 767px){
		& {
			width: 85%;
			border: 2px solid #ffffff;
			padding: .8em 0;
			border-radius: 5px;
			background-color: transparent;
			color: #fff;
			font-size: 1rem;
			font-weight: 600;
			letter-spacing: .2em;
			margin-top: 1.5em;
		}
	}
`

export default function NavButton(props) {
	return(
		<Navbutton>
			{props.text}
		</Navbutton>
	)
}
