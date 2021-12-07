import styled from 'styled-components'
import Button from './Button'

const CardBox = styled.div`
	width: 100%;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1em;	
	box-shadow: 0 3px 5px #99999930;
	
	img {
		padding-top: 3em;	
		width: 30%;
	}	

	.text {
		text-align: center;
	}

	h4 {
		color: var(--Very-Dark-Blue);
		font-size: .8rem;	
		padding-bottom: .5em;	
	}

	p {
		font-size: .675rem;
		color: var(--Grayish-Blue);
	}

	.foot {
		padding-bottom: 1em;
		width: 80%;
	}

`

export default function Card(props){
	return(
		<CardBox className={props.className}>
			<img src={props.icon} alt={props.name}/>

			<div className="text">
				<h4>{`Add to ${props.name}`}</h4>
				<p>{`Minimum version ${props.version}`}</p>
			</div>

			<div className="foot">
				<Button primary text="Add & install Extension"/>
			</div>
		</CardBox>
	)
}