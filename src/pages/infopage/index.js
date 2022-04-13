import React from 'react'
import './styles.css'
const Infopage = (props) => {
	return (
		<div>
			<section id='info_banner'>
				<div id='info_banner_cointainer'>
					<img id='banner_img' src={props.image} alt='Room image' />
				</div>
			</section>
			<section className='info_container'>
				<div className='info_name'>{props.name}</div>
				<div className='info_title'>{props.address}</div>
				<div className='info_description'>{props.description}</div>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							<div className='detail'>{props.available} People</div>
							<div className='detail'>{props.floor} Floors</div>
							<div className='detail'>{props.toilets} Toilets</div>
							<div className='detail'>{props.area} m2</div>
							<div className='detail'>
								{props.wifi ? <span>Wifi Available</span> : <span>No Wifi</span>}
							</div>
							<div className='detail'>{props.rooms} Rooms</div>
							<div className='detail'>{props.price} / month</div>
						</div>
					</div>
					<div className='book_now_container'>
						<div className='book_price'>From CHF {props.price}</div>
						<div className='book_btn'>Location</div>
					</div>
				</div>
				<div className='Gallary_place'>
					<div className='Gallary_title'>Gallary</div>
					<div className='Gallary_picture'>
						<div className='pictures'>
							<div className='picture_container'>
								<img src={props.image} alt='Room image'></img>
							</div>
							<div className='picture_container'>
								<img src={props.image} alt='Room image'></img>
							</div>
							<div className='picture_container'>
								<img src={props.image} alt='Room image'></img>
							</div>
							<div className='picture_container'>
								<img src={props.image} alt='Room image'></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Infopage
