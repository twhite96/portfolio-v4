import React, { Component } from 'react'

class blogs extends Component {
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
			.then(response => response.json())
			.then(json => this.setState({ posts: json }))
	}

	state = {
		posts: []
	}

	renderPosts() {
		return this.state.posts.map(post => (
			<div className='column is-one-third'>
				<div className='card' key={post.title}>
					<div class='card-image'>
						<figure class='image is-4by3'>
							<img
								src='https://bulma.io/images/placeholders/1280x960.png'
								alt='Placeholder'
							/>
						</figure>
					</div>
					<div className='card-content'>
						<div className='content'>
							<h4>
								<a href='/'>{post.title}</a>
							</h4>
						</div>
					</div>
				</div>
			</div>
		))
	}

	render() {
		console.log(this.state.posts)
		return (
			<div>
				<section className='section'>
					<div className='container'>
						<div className='columns is-multiline'>{this.renderPosts()}</div>
					</div>
				</section>
			</div>
		)
	}
}

export default blogs
