module.exports = {
	siteMetadata: {
		title: 'Glenn Francis',
		author: 'Glenn Francis',
		description: 'Portfolio Website',
		keywords: `Portfolio website for Glenn Francis, a web developer based in Brisbane, Australia`,
		github: `https://github.com/gfrancis13`,
		medium: 'https://medium.com/@gfrancis',
		linkedin: 'https://www.linkedin.com/in/glenn-francis/',
		siteUrl: `https://www.example.com`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src`,
				name: 'src'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: 'blog'
			}
		},
		'gatsby-transformer-sharp',
		`gatsby-transformer-remark`,
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify-cms`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
}
