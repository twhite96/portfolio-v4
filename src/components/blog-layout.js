import React from 'react'

import './style.scss'
import Helmet from './helmet'
import BlogHeader from './blog-header'
import Footer from './footer'
import Blogs from './blogs'

const BlogLayout = ({ children }) => (
	<div>
		<Helmet />
		<BlogHeader title='My Blogs' />
		<Blogs />
		<Footer />
	</div>
)

export default BlogLayout
