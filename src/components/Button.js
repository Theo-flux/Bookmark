import styled from 'styled-components'

const Custombutton = styled.button`
	background-color: ${props => props.primary ? "var(--Soft-Blue)":"var(--Grayish-Blue-trans)"};
	color: ${props => props.primary ? "white":"var(--Grayish-Blue)"};
	font-weight: 500; 
	padding: 1em 1.3em;
	width: 100%;
	transition: .4s all linear;	
	border: none;
	box-shadow: ${props => props.primary ? "none":"0 3px 5px #99999930"};
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		background-color: ${props => props.primary ? "white":"white"};
		color: ${props => props.primary ? "var(--Soft-Blue)":"var(--Grayish-Blue)"};
		outline: ${props => props.primary ? "2px solid var(--Soft-Blue)":"2px solid var(--Grayish-Blue)"};
		outline-offset: -3px;
		box-shadow: 0 3px 5px #99999930;
		transition: .3s all linear;
	}
`

export default function Button({text,...props}) {
	return(
		<Custombutton {...props}>
			{text}
		</Custombutton>
	)
}
