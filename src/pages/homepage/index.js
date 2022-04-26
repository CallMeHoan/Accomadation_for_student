import React from 'react'
import { Suspense, lazy } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

import Hotel_room_img_1 from '../../assets/homepage/hotel_pic/hotel_room.png'
import Hotel_room_img_2 from '../../assets/homepage/hotel_pic/hotel_room_2.png'
import Hotel_room_img_3 from '../../assets/homepage/hotel_pic/hotel_room_3.png'
import home_banner from '../../assets/home_banner.png'
import content2_pic from '../../assets/content2_pic2.png'

const Hotels = lazy(() => import('./hotels'))

const hotels = [
	{
		id: 1,
		type: 'Classic Room',
		image: Hotel_room_img_1,
		property: '25m / No specific view / 2 Adults',
		description:
			'The dark wood panelling and elegant furnishings evoke the charm of a secluded Sierra Nevada getaway.',
	},
	{
		id: 2,
		type: 'Superior Room',
		image: Hotel_room_img_2,
		property: '25m / Partial Mountain View / 2 Adults, 1 Children ',
		description:
			'The superior double rooms offer a cosy, rustic atmosphere, and are the ultimate setting to escape from the stresses of daily life.',
	},
	{
		id: 3,
		type: 'Deluxe Room',
		image: Hotel_room_img_3,
		property: '28 - 36m/ Mountain View/ 2 Adults ',
		description:
			'Each impressive deluxe room is inspired by a different mountain region of the world, from the Swiss Alps to Mount Kilimanjaro.',
	},
]

const homepage = () => {
	return (
		<div className='homepage'>
			<section id='main_banner'>
				<div id='img_banner_cointainer'>
					<img id='banner_img' src={home_banner} />
				</div>
			</section>
			<section id='content-1'>
				<section id='header-content-1'>
					<h4>Welcome to Movila </h4>
				</section>
				<div className='content'>Description</div>
			</section>
			<section id='content-2'>
				<div id='img-content-2'>
					<img src={content2_pic} />
				</div>
				<section id='header-content-2'>
					<h4>Seeking a truly peaceful experience? Find Movila, we can guarantee.</h4>
				</section>
			</section>

			<section id='content-4'>
				<div id='content-4-header'>Discover the top hotels at the most affordable costs.</div>
				<Link to='/rooms'>
					{' '}
					<button id='content-4-btn'>Discover</button>
				</Link>
			</section>
			<section id='selection-banner'>
				<section id='selection-place'>
					<div className='hotel_homepage'>
						<div className='img-hotel_homepage'>
							<img src={Hotel_room_img_1} />
						</div>
					</div>
					<div className='hotel_homepage'>
						<div className='img-hotel_homepage'>
							<img src={Hotel_room_img_2} />
						</div>
					</div>
					<div className='hotel_homepage'>
						<div className='img-hotel_homepage'>
							<img src={Hotel_room_img_3} />
						</div>
					</div>
				</section>
			</section>
		</div>
	)
}

export default homepage
