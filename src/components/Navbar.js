import {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import NavItems from './NavItems'
import Container from '../styles/Container'
import {Bookmark, White, Menu, Close} from '../Assets' 

const NavContainer = styled.div `
	padding: 1.5em 0;
	position: relative;
	@media (min-width: 768px){

	}
`
const Row = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		width: 40%;
	}

	.logo, .menu {
		z-index: 2;
		transition: .5s all linear;
	}

	@media (min-width: 768px){
		.menu {
			display: none;
		}

		.logo {
			width: 15%;
		}
	}
`

export default function Navbar(){
	const [isToggled, setIsToggled] = useState(false)
	const menuItems = useRef(null)

	function changeToggler(){
		setIsToggled(!isToggled)
	}

	useEffect(()=>{
		
		if(isToggled){
			menuItems.current.style.top = '0%'
			menuItems.current.style.transition = '.5s top linear'
		}else{
			menuItems.current.style.top = '-3000%'
			menuItems.current.style.transition = '.9s top linear'
		}
			

	},[isToggled])

	return(
		<NavContainer>
			<Container>
				<Row>
					<img className="logo" src={isToggled ? White:Bookmark} alt="logo"/>
					{isToggled ?
						<img onClick={() => changeToggler()} className="menu" src={Close} alt="close"/>
						:
						<img onClick={() => changeToggler()} className="menu" src={Menu} alt="hamburger"/>
					}
					<NavItems listener={menuItems}/>
				</Row>
			</Container>
		</NavContainer>		
	)
}
