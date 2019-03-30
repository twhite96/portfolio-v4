import React from 'react'
import './style.scss'
import Navbar from './navbar'

const BlogHeader = ({ title }) => (
	<section className='hero gradientBg--blog is-small'>
		<Navbar />
		<div className='hero-body'>
			<div className='container left'>
				<div className='content'>
					<h1 className='is-uppercase header-title has-text-white'>{title}</h1>
				</div>
			</div>
		</div>
	</section>
)

export default BlogHeader
