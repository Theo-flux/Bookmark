import styled from 'styled-components'
import Form from './Form'
import Container from '../styles/Container'

const ContactContainer = styled.div`
	padding: 2em 0;
	background-color: var(--Soft-Blue);
	p, h5{
		text-align: center;
		color: white;
	}

	p {
		font-size: .875rem;
		letter-spacing: .2em;
	}

	h5 {
		padding: .5em 0 1em 0;
		font-size: 1.2rem;
	}

	@media (min-width: 768px){
		.contain {
			width: 500px;
			margin: 0 auto;
		}
	}
`

export default function Contact(){
	return(
		<ContactContainer>
			<Container>
				<div className="contain">
				<p><small>35,000+ ALREADY JOINED</small></p>
				<h5>Stay up-to-date with what we're doing</h5>
				<Form/>
				</div>
			</Container>			
		</ContactContainer>
	)
}