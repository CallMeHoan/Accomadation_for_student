import './styles.css'
import { Link } from 'react-router-dom'

const hotel = (props) => {
	return (
		<Link className='link' to={`/rooms/${props.id}`}>
			<div className='hotel'>
				<div className='img-hotel'>
					<img src={props.image} />
				</div>
				<div className='content-hotel'>
					<div className='header-content-hotel'>
						{props.name}
						<div className='hotel-content-line'></div>
					</div>
					<div className='property-content-hotel'>{props.address}</div>
					<div className='description-content-hotel'>{props.description}</div>
				</div>
				<button className='discovery-hotel'>Discover More</button>
			</div>
		</Link>
	)
}

export default hotel
