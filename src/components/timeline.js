import React from 'react'
import yflogo from '../images/youfoodz.jpeg'
import sortal from '../images/sortal-logo.jpeg'
import calogo from '../images/coder-academy.jpeg'
import woolies from '../images/woolies.png'
import usclogo from '../images/usc.jpg'

const timeline = () => (
	<>
		<div class='timeline is-centered'>
			<div class='timeline-item is-warning'>
				<div class='timeline-marker is-warning is-image is-48x48'>
					<img src={yflogo} alt='Youfoodz' />
				</div>
				<div class='timeline-content'>
					<p class='heading'>Feb 2019 - Mar 2019</p>
					<p>Youfoodz - Front End Developer</p>
				</div>
			</div>
			<div class='timeline-item is-warning'>
				<div class='timeline-marker is-warning is-image is-48x48'>
					<img src={sortal} alt='Sortal Logo' />
				</div>
				<div class='timeline-content'>
					<p class='heading'>January 2019</p>
					<p>Sortal - Intern</p>
				</div>
			</div>
			<header class='timeline-header'>
				<span class='tag is-info'>2019</span>
			</header>
			<div class='timeline-item is-warning'>
				<div class='timeline-marker is-warning is-image is-48x48'>
					<img src={calogo} alt='Coder Academy Logo' />
				</div>
				<div class='timeline-content'>
					<p class='heading'>Aug 2018 - Feb 2019</p>
					<p>Coder Academy</p>
				</div>
			</div>
			<div class='timeline-item is-warning'>
				<div class='timeline-marker is-warning is-image is-48x48'>
					<img src={woolies} alt='Woolies' />
				</div>
				<div class='timeline-content'>
					<p class='heading'>2013 - 2018</p>
					<p>Woolworths</p>
				</div>
			</div>
			<div class='timeline-item is-warning'>
				<div class='timeline-marker is-warning is-image is-48x48'>
					<img src={usclogo} alt='USC' />
				</div>
				<div class='timeline-content'>
					<p class='heading'>2011 - 2016</p>
					<p>Bachelor of Exercise Science</p>
					<p>University of The Sunshine Coast</p>
				</div>
			</div>
			<header class='timeline-header'>
				<span class='tag is-medium is-primary'>Start</span>
			</header>
		</div>
	</>
)

export default timeline
