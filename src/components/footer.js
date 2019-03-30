import React from 'react'
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						linkedin
						medium
						github
					}
				}
			}
		`}
		render={data => (
			<footer className='footer center'>
				<a
					href={data.site.siteMetadata.linkedin}
					className='footer-social'
					target='_blank'
					rel='noopener noreferrer'>
					<FaLinkedin size='fa-2x' color='grey' className='footer-social' />
				</a>

				<a
					href={data.site.siteMetadata.github}
					className='footer-social'
					target='_blank'
					rel='noopener noreferrer'>
					<FaGithub size='fa-2x' color='grey' className='footer-social' />
				</a>

				<a
					href={data.site.siteMetadata.medium}
					className='footer-social'
					target='_blank'
					rel='noopener noreferrer'>
					<FaMedium size='fa-2x' color='grey' className='footer-social' />
				</a>
			</footer>
		)}
	/>
)

export default Footer
