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
				<div className='info_name'>{props.type}</div>
				<div className='info_title'>{props.title}</div>
				<div className='info_description'>{props.full_description}</div>
				<div className='info_details_book'>
					<div className='info_details'>
						<div className='all_details'>
							{props.full_property.map((item, index) => (
								<div key={index} className='detail'>
									{item}
								</div>
							))}
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
								<img src={props.image}></img>
							</div>
							<div className='picture_container'>
								<img src={props.image}></img>
							</div>
							<div className='picture_container'>
								<img src={props.image}></img>
							</div>
							<div className='picture_container'>
								<img src={props.image}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Infopage
