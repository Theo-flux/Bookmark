import styled from 'styled-components'
import {NavLink, Routes, Route} from 'react-router-dom'
import Container from '../styles/Container'
import Featuretabs from './Featuretabs'
import {IllustrationTab1,IllustrationTab2,IllustrationTab3} from '../Assets'


const FeaturesContainer = styled.div`
	padding: 3em 0;

	@media (min-width: 768px){
		.container{
			width: 500px;
			margin:0 auto;
		}
	}
`

const Title = styled.h4`
	color: var(--Very-Dark-Blue);
	text-align: center;
	font-weight: 600;
	font-size: 1.2rem;
	margin: 1em;
`

const Text = styled.p`
	text-align: center;
	font-size: .8rem;
	color: var(--Grayish-Blue);
	line-height: 1.5;
`

const Column = styled.div`
	margin: 2em 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media (min-width: 768px){
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 500px;
	}
`

const Columnitem = styled.div`	
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid var(--Grayish-Blue);

	&:last-of-type {
		border-bottom: 1px solid var(--Grayish-Blue);
	}

	@media (min-width: 768px){
		border-top: 0;
		border-bottom: 1px solid var(--Grayish-Blue);
	}

`

const StyledLink = styled(NavLink)`
	text-align: center;
	font-size: .875rem;
	text-decoration: none;
	font-weight: 500;
	color: var(--Grayish-Blue);
	padding: 1em 0;

	&:hover {
		color: blue;
		border-bottom: 4px solid var(--Soft-Red);
	}

	@media (min-width: 768px){
		font-size: .8rem;

		&:hover {
			border-bottom: 4px solid var(--Soft-Red);
		}
	}

`

function Features(){

	return (
		<FeaturesContainer>
			<Container className="container">
				<div className="row">
					<Title>Features</Title>
					<Text>
						Our aim is to make it quick and easy for you
					 	to access your favourite websites. Your bookmarks styled-components between your devices so
					 	you can access them on the go.
					</Text>
				</div>

					<Column>
						<Columnitem><StyledLink exact activeClassName = "selected" to='/' >Simple Bookmarking</StyledLink></Columnitem>
						<Columnitem><StyledLink  to='/a' >Speedy Searching</StyledLink></Columnitem>
						<Columnitem><StyledLink to='/b' >Easy Sharing</StyledLink></Columnitem>
					</Column>

			</Container>

			<Routes>

				<Route 
					exact path='/'
					element={
						<Featuretabs 
							image={IllustrationTab1} 
							caption="Bookmark in one click"
							text='Organize your bookmarks however you like. 
								Our simple drag-and-drop interface gives
								you complete control over how you manage
								your favourite sites'
						/>
					} 
				/>

				<Route 
					path='/a' 
					element={
						<Featuretabs 
							image={IllustrationTab2} 
							caption="Intelligent search"
							text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
						/>
					} 
				/>

				<Route 
					path='/b' 
					element={
						<Featuretabs
							image={IllustrationTab3} 
							caption="Share your bookmarks"
							text='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
						/>
					} 
				/>

			</Routes>
		</FeaturesContainer>
	)
}

export default Features