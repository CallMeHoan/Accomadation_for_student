import react from 'react'

import './styles.css'

const hotels = (props) => {
	return (
		<div className='hotel'>
			<div className='img-hotel'>
				<img src={props.image} />
			</div>
			<div className='content-hotel'></div>
		</div>
	)
}

export default hotels
