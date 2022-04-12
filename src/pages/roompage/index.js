import React from 'react'
import { lazy } from 'react'
import './styles.css'
import { useGetAccomadation } from '../../queries/useAccomadations.queries'

import room_banner from '../../assets/room_banner.png'

const Hotel = lazy(() => import('./hotel'))

const Roompage = () => {
	const { data } = useGetAccomadation()
	console.log(data)
	console.log('dai di')
	return (
		<div>
			<section id='room_banner'>
				<div id='room_banner_cointainer'>
					<img id='banner_img' src={room_banner} alt='banner' />
				</div>
			</section>
			<section id='menu-selection'>
				{data.map((item) => (
					<Hotel
						id={item.id}
						type={item.type}
						image={item.image}
						property={item.property}
						description={item.description}
						title={item.title}
						full_description={item.full_description}
						full_property={item.full_property}
						price={item.price}
					/>
				))}
			</section>
		</div>
	)
}
export default Roompage
