import React from 'react'
import './style.scss'
import Helmet from './helmet'
import BlogHeader from './blog-header'
import Footer from './footer'

const WorkLayout = ({ children }) => (
	<div>
		<Helmet />
		<BlogHeader title='My Work' />
		{/* Work */}
		<Footer />
	</div>
)

export default WorkLayout