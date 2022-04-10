import react from 'react'

import './styles.css'
import about_banner from '../../assets/homepage/hotel_pic/hotel_room_2.png'
import story_banner_1 from '../../assets/story/story_banner_1.jpg'
import story_banner_2 from '../../assets/story/story_banner_2.jpg'
import story_banner_3 from '../../assets/story/story_banner_3.jpg'
import story_banner_4 from '../../assets/story/story_banner_4.jpg'
import story_banner_5 from '../../assets/story/story_banner_5.jpg'
import logo from '../../assets/logo_new.png'

const aboutpage = () => {
	return (
		<div>
			<section id='about_banner'>
				<div id='about_banner_cointainer'>
					<img id='banner_img' src={about_banner} alt='Banner' />
				</div>
			</section>
			<section id='intro_story'>
				<img id='logo' src={logo} alt='Logo'></img>
				<div className='intro_content_story'>
					“Scrum is a lightweight framework that helps people, teams and organizations generate
					value through adaptive solutions for complex problems.” “Scrum is founded on empiricism
					and lean thinking. Empiricism asserts that knowledge comes from experience and making
					decisions based on what is observed. Lean thinking reduces waste and focuses on the
					essentials.”
					<br />
					<br />…
					<br />
					<br />
					These are just a few of the things we've learnt throughout our four weeks of scrum
					training.
					<br />
					We've been working on MoVila as a way to demonstrate what we've learnt about Scrum. Let's
					explore MoVila.
				</div>
			</section>
			<section id='story'>
				<div className='item1'>
					<div className='block-1'>
						<img src={story_banner_1} id='banner_1'></img>
						<div className='content-block-1'>
							Second week, we learned about Scrum events and Scrum artifacts. This is also the day
							Scrum 101 appeared
						</div>
					</div>
				</div>
				<div className='item2'>
					<div className='line-1'></div>
				</div>
				<div className='item3'>
					<div className='block-3'>
						<img src={story_banner_2} id='banner_2'></img>
						<div className='content-block-3'>
							First week, we learnt about introduction to Agile and scrum framework as well as Scrum
							foundations and Srum team
						</div>
					</div>
				</div>
				<div className='item4'>
					<div className='block-4'>
						Theory
						<br />
						<br />
						We were provided knowledge foundation about Scrum, Agile
					</div>
				</div>
				<div className='item5'>
					<img src={story_banner_3} id='banner_3'></img>
				</div>
				<div className='item6'>
					<div className='line-2'></div>
				</div>
				<div className='item7'>
					<div className='block-7'>
						<img src={story_banner_4} id='banner_4'></img>
						<div className='content-block-7'>We carried out Sprint 1 and Sprint 2 next week</div>
					</div>
				</div>
				<div className='item8'>
					<div className='content-block-8'>
						Practice
						<br />
						<br />
						The MoVila project is developed by Srum 101.
					</div>
				</div>
				<div className='item9'>
					<div className='block-9'>
						<img src={story_banner_5} id='banner_5'></img>
						<div className='content-block-9'>
							Final week, we completed Sprint 3 and presented our product-MoVila as well as share
							how we worked in Scrum framework
						</div>
					</div>
				</div>
				<div className='item10'>
					<div className='line-3'></div>
				</div>
			</section>
		</div>
	)
}

window.addEventListener('scroll', function (e) {
	let position = window.scrollY
	let banner_4 = this.document.getElementById('banner_4')
	let content_block_7 = this.document.getElementsByClassName('content-block-7')
	let block_4 = this.document.getElementsByClassName('block-4')
	let content_block_8 = this.document.getElementsByClassName('content-block-8')
	let banner_3 = this.document.getElementById('banner_3')
	content_block_7[0].style.top = -position / 60 + 30 + 'vw'
	banner_4.style.top = -position / 60 + 30 + 'vw'
	block_4[0].style.top = -position / 200 + 10 + 'vw'
	content_block_8[0].style.top = -position / 100 + 22 + 'vw'
	banner_3.style.top = -position / 100 + 30 + 'vw'
	console.log()
})

export default aboutpage
