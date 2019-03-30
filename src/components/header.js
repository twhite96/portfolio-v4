import React from 'react'
import './style.scss'
import Navbar from './navbar'
import Particles from 'react-particles-js'

const Header = ({ siteTitle }) => (
	<section className='hero gradientBg is-medium'>
		<Navbar />
		<Particles
			style={{ position: 'absolute' }}
			params={{
				particles: {
					number: {
						value: 50
					},
					size: {
						value: 3
					}
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'repulse'
						}
					}
				}
			}}
		/>
		<div className='hero-body'>
			<div className='container center'>
				<div className='content'>
					<h1 className='is-uppercase header-title has-text-white'>
						I CREATE HIGH QUALITY DIGITAL DESIGNS & USER‑FRIENDLY EXPERIENCES.
					</h1>
					<div className='buttons are-large field is-grouped has-text-weight-bold'>
						<a
							href='/work'
							className='has-text-weight-bold button rounded is-uppercase is-primary'>
							My Work
						</a>
						<a
							href='/blog'
							className='button is-uppercase is-danger has-text-weight-bold'>
							Blog
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Header
