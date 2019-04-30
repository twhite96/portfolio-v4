import React from 'react'

const skills = () => {
	return (
		<div className="content has-text-centered">
			<h3 className="has-text-danger">MY SKILLS</h3>
			<h2>Languages I Speak.</h2>
			<div className="tile is-ancestor">
				<div className="tile is-vertical is-8">
					<div className="tile">
						<div className="tile is-parent is-vertical">
							<article className="tile is-child notification is-light">
								<p className="title">Front End</p>
								<div className="tags are-medium">
									<span className="tag is-primary">HTML</span>
									<span className="tag is-primary">CSS</span>
									<span className="tag is-primary">SCSS</span>
									<span className="tag is-primary">Javascript</span>
									<span className="tag is-primary">jQuery</span>
									<span className="tag is-primary">React</span>
									<span className="tag is-primary">React Native</span>
									<span className="tag is-primary">Bootstrap</span>
									<span className="tag is-primary">NextJS</span>
									<span className="tag is-primary">Gatsby</span>
									<span className="tag is-primary">Angular</span>
								</div>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification is-light">
								<p className="title">Back End</p>
								<div className="tags are-medium">
									<span className="tag is-primary">Node/Express</span>
									<span className="tag is-primary">Ruby/Ruby on Rails</span>
									<span className="tag is-primary">PHP/Laravel</span>
									<span className="tag is-primary">Python/Django</span>
									<span className="tag is-primary">
										Postgres, MySql, Sqlite
									</span>
									<span className="tag is-primary">MongoDB</span>
									<span className="tag is-primary">GraphQL</span>
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child notification is-light">
						<div className="content">
							<p className="title">Other</p>
							<div className="tags are-medium">
								<span className="tag is-primary">Git</span>
								<span className="tag is-primary">Shopify</span>
								<span className="tag is-primary">Wordpress</span>
								<span className="tag is-primary">Electron</span>
								<span className="tag is-primary">Docker</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	)
}

export default skills
