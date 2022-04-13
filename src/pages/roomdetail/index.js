import react from 'react'
import './styles.css'
import { lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAccomadationById } from '../../queries/useAccomadations.queries'

const Infopage = lazy(() => import('../infopage'))

const Each_info_page = () => {
	const params = useParams()
	const id = params.id
	const { data } = useGetAccomadationById(id)

	return (
		<div>
			<Infopage
				image={data?.data.image_Url}
				name={data?.data.name}
				address={data?.data.address}
				description={data?.data.description}
				available={data?.data.available}
				floor={data?.data.floor}
				price={data?.data.price}
				rooms={data?.data.rooms}
				toilets={data?.data.toilets}
				area={data?.data.area}
				wifi={data?.data.width}
			/>
		</div>
	)
}
export default Each_info_page
