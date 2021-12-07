import styled from 'styled-components'
import Card from './Card'
import Container from '../styles/Container'
import {browsers }from '../Data'

const ExtensionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
	padding: 2em 0;
`
const Header = styled.header`
	h3 {
		text-align: center;
		font-weight: 600;
		color: var(--Very-Dark-Blue);
		font-size: 1rem;
		margin: 1em;
	}

	p{
		text-align: center;
		font-size: .8rem;
		color: var(--Grayish-Blue);
		line-height: 1.5;
	}

	@media (min-width: 768px){
		width: 40%;

		h3 {
			font-size: 1.3rem;
		}
	}
`

const Flex = styled.section`
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 1em;

	@media (min-width: 768px){
		display: grid;
		grid-template: 10px 250px 10px 10px/ repeat(3,.8fr);
		grid-gap: 1em;

		.item-1 {
			grid-row: 1/3;
		}

		.item-2 {
			grid-row: 2/4;
		}

		.item-3 {
			margin-top:10px;
			grid-row: 2/5;
		}
	}

	

` 
export default function Extension(){
	const classname = ["item-1","item-2","item-3"]
	return(
		<Container>
			<ExtensionContainer>
				<Header>
					<h3>Download the extension</h3>
					<p>
						We,ve got more browswers in the pipline. 
						Please do let us know if you've got a 
						favourite you'd like us to priortize
					</p>
				</Header>

				<Flex>
					{browsers.map( (browser, index) => {
						return(
							<Card 
								className = {classname[index]}
								key={browser.id}
								icon={browser.icon}
								name={browser.Name}
								version={browser.version}
							/>
						)
					})}
				</Flex>
			</ExtensionContainer>
		</Container>
	)
}