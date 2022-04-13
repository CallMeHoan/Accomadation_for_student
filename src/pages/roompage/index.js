import React from 'react'
import { lazy } from 'react'
import './styles.css'
import { useGetAccomadation } from '../../queries/useAccomadations.queries'

import room_banner from '../../assets/room_banner.png'

const Hotel = lazy(() => import('./hotel'))

const Roompage = () => {
	const { data } = useGetAccomadation()
	console.log(data)

	return (
		<div>
			<section id='room_banner'>
				<div id='room_banner_cointainer'>
					<img id='banner_img' src={room_banner} alt='banner' />
				</div>
			</section>
			<section id='menu-selection'>
				{data?.data.map((item) => (
					<Hotel
						key={item.id}
						id={item.id}
						name={item.name}
						image={item.image_Url}
						address={item.address}
						description={item.description}
					/>
				))}
			</section>
		</div>
	)
}
export default Roompage
