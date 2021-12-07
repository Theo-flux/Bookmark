import styled from 'styled-components'
import Container from '../styles/Container'
import Button from './Button'

const FeaturesTabContainer = styled.div`	
	margin: 1em 0;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	&::before {
		position: absolute;
		content: "";
		top: 10%;
		left: 0;
		width: 80%;
		background-color: var(--Soft-Blue);
		height: 200px;
		border-top-right-radius: 100px;
		border-bottom-right-radius: 100px;
		z-index: -2;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		margin: 0 auto;
	}

	@media (min-width: 768px){
		.row {
			width: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			
		}

		.btn {
			margin: 1em 0;
		}

		&::before {
			width: 500px;
			height: 300px;
			border-top-right-radius: 300px;
			border-bottom-right-radius: 300px;
		}

		.column {
			width: 40%;
		}
	}
`

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 80%;
		min-height: 200px;
	}

	@media (min-width: 768px){
		width: 45%;
		
		img {
			width: 100%;
			max-height: 280px;
		}
	}
	
`

const InfoContainer = styled.div`
	width: 100%;
	padding-top: 3em;
	padding-bottom: 1em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;

	h4, p {
		text-align: center;
		line-height: 1.5;
	}

	h4 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--Very-Dark-Blue);
	}

	p {
		font-size: .9rem;
		color: var(--Grayish-Blue);
	}

	@media (min-width: 768px){
		padding: 0;
		justify-content: flex-start;
		align-items: flex-start;

		p,
		h4 {
			text-align: left;
		}

		p {
			font-size:.8rem;
		}

	}
	
`


// const Row = styled.div`
// 	width: 80%;
// 	margin: 0 auto;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
	
// `
export default function Hero(props) {
	return(
		
		<FeaturesTabContainer>
			<Container>
				<div className="row">
					<Content>
						<img src={props.image} alt="features-illustration-tab"/>
					</Content>

					<div className="column">
						<Container>	
							<InfoContainer>
								<h4> {props.caption} </h4>
								<p> {props.text} </p>
							</InfoContainer>
						</Container>
						

						<Container>
							<div className="btn">
								<Button primary text='More Info'/>
							</div>
						</Container>
					</div>
				</div>
			</Container>
		</FeaturesTabContainer>
	)
}

