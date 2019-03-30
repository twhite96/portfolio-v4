import React from 'react'

const skills = () => {
	return (
		<div className='content has-text-centered'>
			<h3 className='has-text-danger'>MY SKILLS</h3>
			<h2>Languages I Speak.</h2>
			<div class='tile is-ancestor'>
				<div class='tile is-vertical is-8'>
					<div class='tile'>
						<div class='tile is-parent is-vertical'>
							<article class='tile is-child notification is-light'>
								<p class='title'>Front End</p>
								<div class='tags are-medium'>
									<span class='tag is-primary'>HTML</span>
									<span class='tag is-primary'>CSS</span>
									<span class='tag is-primary'>SASS</span>
									<span class='tag is-primary'>Javascript</span>
									<span class='tag is-primary'>jQuery</span>
									<span class='tag is-primary'>React</span>
									<span class='tag is-primary'>React Native</span>
									<span class='tag is-primary'>Bootstrap</span>
									<span class='tag is-primary'>Next.js</span>
									<span class='tag is-primary'>Gatsby</span>
								</div>
							</article>
						</div>
						<div class='tile is-parent'>
							<article class='tile is-child notification is-light'>
								<p class='title'>Back End</p>
								<div class='tags are-medium'>
									<span class='tag is-primary'>Node Js</span>
									<span class='tag is-primary'>Ruby</span>
									<span class='tag is-primary'>PHP</span>
									<span class='tag is-primary'>Python</span>
									<span class='tag is-primary'>SQL</span>
									<span class='tag is-primary'>NoSQL</span>
									<span class='tag is-primary'>GraphQL</span>
									<span class='tag is-primary'>Express Js</span>
									<span class='tag is-primary'>Ruby on Rails</span>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div class='tile is-parent'>
					<article class='tile is-child notification is-light'>
						<div class='content'>
							<p class='title'>Other</p>
							<div class='tags are-medium'>
								<span class='tag is-primary'>Git</span>
								<span class='tag is-primary'>Shopify</span>
								<span class='tag is-primary'>Wordpress</span>
							</div>
						</div>
					</article>
				</div>
			</div>
			<button className='button is-medium is-danger'>Download My Resume</button>
		</div>
	)
}

export default skills
