/* eslint-disable */
import React from 'react'
import { FaGithub } from 'react-icons/fa'

import './style.scss'

const Navbar = () => (
	<div className='hero-head'>
		<nav className='navbar is-danger'>
			<div className='container'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='/'>
						Glenn Francis
					</a>
				</div>
				<div id='navbarMenuHeroA' className='navbar-menu'>
					<div className='navbar-end'>
						<span className='navbar-item'>
							<a
								className='button is-danger is-inverted is-white'
								href='mailto:XglenfrancisX@gmail.com'>
								<span className='icon'>👋</span>
								<span>Say Hello</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
)

export default Navbar
