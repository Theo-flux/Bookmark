import styled from 'styled-components'

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: .7em;
	width: 100%;

	input {
		background-color: white;
		border-radius: 4px;
		padding: 1em;
		width: 100%;
		border: none;
	}

	input::placeholder {
		color: var(--Grayish-Blue);
	}

	input:focus {
		outline: none;
	}

	button {
		background-color: var(--Soft-Red);
		color: white;
		text-align: center;
		border-radius: 4px;
		padding: 1em;
		border: 0;
		font-weight: 600;
	}

	@media (min-width: 767px){
		flex-direction: row;

		input {
			width: 75%;
		}

		button {
			width: 25%;
		}
	}
`

export default function Form(){
	return(
		<FormContainer>
			<input type="email" name="email" placeholder="Enter your email address"/>
			<button type="submit">Contact Us</button>
		</FormContainer>
	)
}