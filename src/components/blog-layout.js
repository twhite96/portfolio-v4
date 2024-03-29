import React from 'react'
import './style.scss'
import Helmet from './helmet'
import BlogHeader from './blog-header'
import Footer from './footer'
import Blogs from './blogs'

const BlogLayout = ({ posts }) => (
	<div>
		<Helmet />
		<BlogHeader title='My Blog' />
		<Blogs posts={posts} />
		<Footer />
	</div>
)

export default BlogLayout
