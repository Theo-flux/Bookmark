import styled from 'styled-components'
import Container from '../styles/Container'
import Button from './Button'
import {Hero1} from '../Assets'

const HeroContainer = styled.div`
	position: relative;
	margin: 2em 0;	
	width: 100%;

	&::before {
		position: absolute;
		content: "";
		top: 10%;
		right: 0;
		width: 80%;
		background-color: var(--Soft-Blue);
		height: 180px;
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
		z-index: -2;
	}

	@media (min-width: 768px){

		&::before {
			top: 30%;
			width: 400px;
			height: 250px;
		}

		.row {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: center;
		}
	}
`

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
		min-height: 200px;
	}

	@media (min-width: 768px){
		width: 45%;
		
		img {
			width: 100%;
			min-height: 0;
		}
	}
`

const Section = styled.section`
	@media (min-width: 767px){
		width: 40%;
	}
`

const TextContainer = styled.div`
	margin: 1em auto;
	width: 85%;
	padding: 1em 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;

	h2, p {
		text-align: center;
		line-height: 1.5;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--Very-Dark-Blue);
	}

	p {
		font-size: .9rem;
		color: var(--Grayish-Blue);
	}

	@media (min-width: 767px){
		width: 100%;
		justify-content: flex-start;
		align-items: flex-start;
		gap: .5em;

		h2,p{
			text-align: left;
		}

		h2 {
			font-size: 1.8rem;
		}

		p {
			font-size: .8rem;
		}
	}

`

const Row = styled.div`
	width: 100%;
	margin: 0 auto;
	display: grid;
	grid-template: auto / auto auto;
	grid-gap: 1em;

	@media (min-width: 767px){
		width: 350px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin: 1em 0;
	}
	
`
export default function Hero() {
	return(
		<HeroContainer>
			<Container>
				<div className="row">
					<Content>
						<img src={Hero1} alt="hero"/>
					</Content>

					<Section>
						<TextContainer>
							<h2>A Simple Bookmark Manager</h2>
							<p>
								A clean and simple interface to organize
								your favourite websites.Open a new browser
								tab and see your sites load
							</p>
						</TextContainer>
						
						
						
						<Row>
							<Button primary text='Get it on Chrome'/>
							<Button text='Get it on FireFox'/>
						</Row>
					</Section>
				</div>
			</Container>
		</HeroContainer>
	)
}