import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Container from '../styles/Container'
import {Faqs} from '../FAQapi'
import Button from './Button'



const FAQContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
	padding: 2em 0;

	@media (min-width: 768px){
		width: 500px;
		margin: 0 auto;
	}
`
const Header = styled.header`
	h3 {
		text-align: center;
		font-weight: 600;
		color: var(--Very-Dark-Blue);
		font-size: 1.3rem;
		margin: 1em;
	}

	p {
		text-align: center;
		font-size: .8rem;
		color: var(--Grayish-Blue);
		line-height: 1.5;
	}
`

const Flex = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: .5em;

	.drawer {
		border-bottom: 1px solid var(--Grayish-Blue);
		padding-bottom: .5em;
	}

	p {
		font-size: .8rem;
		font-weight: 300;
	}

	span {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: .5em;
		cursor: pointer;
	}

	span > p,
	span > i {
		font-weight: 400;
	}

	span > i {
		color: var(--Soft-Blue);
		font-size: 1.5rem;
	}

	.answer-element {
		line-height: 1.7;
		font-size: .75rem;
	}
	
`

export default function FAQ(){
	let [toggleDrawer, setToggleDrawer] = useState(false)

	function handleToggle(arg){
		
		if(toggleDrawer === arg){
			return setToggleDrawer(null)
		}
		setToggleDrawer(arg)

	}

	return(
		<Container>
			<FAQContainer>
				<Header>
					<h3>Frequently Asked Questions</h3>
					<p>
						Here are some of our FAQs. If you have any
						other questions you'd like answered please feel 
						free to email us.
					</p>
				</Header>

				<Flex>
					{
						Faqs.map((faq, index) => {
							return(
								<div 
									key={faq.id} 
									className="drawer"
								>
									
									<span onClick={() => handleToggle(index)}>
										<p>{ faq.question }</p> 
										{toggleDrawer === index ? <i style={{color:"var(--Soft-Red)"}} className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
									</span>

									{toggleDrawer === index ? 
										(<p className="answer-element">{ faq.answer }</p>):null
									}
									
								</div>
							)
						})
					}
				</Flex>

				<div>
					<Button primary text="More Info" />
				</div>
			</FAQContainer>
		</Container>
	)
}

