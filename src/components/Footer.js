import styled from 'styled-components'
import {Bookmark} from '../Assets'

const FooterContainer = styled.div`
	background-color: var(--Very-Dark-Blue);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;
	padding: 2em;

	@media (min-width: 768px){
		flex-direction: row;
		justify-content: space-between;

		.box {
			display: flex;
			justify-content: space-between;
			width: 400px;
		}
	}
`

const Column = styled.div`
	display: flex;
	flex-direction:column;
	gap: 1em;
	cursor: pointer;

	@media (min-width: 768px){
		flex-direction: row;
		align-items: center;
	}
`
const Child = styled.p`
	color: white;
	font-size: .75rem;
	font-weight: 300;
	text-align: center;
	text-transform: uppercase;
`

const Row = styled.div`
	color: white;
	width:20%;
	display: flex;
	justify-content: space-around;

	@media (min-width: 768px){
		width: 100px;
	}

`



export default function Footer(){
	return(
		<FooterContainer>
			<div className="box">
				<img src={Bookmark} alt="logo"/>
				
				<Column>
					<Child>Features</Child>
					<Child>Pricing</Child>
					<Child>Contact</Child>
				</Column>
			</div>
			
			<Row>
				<i className="ri-facebook-box-fill"></i>
				<i className="ri-twitter-fill"></i>
			</Row>
		</FooterContainer>
	)
}