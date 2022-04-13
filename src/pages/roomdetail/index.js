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
				image={data?.image_Url}
				name={data?.name}
				address={data?.address}
				description={data?.description}
				available={data?.available}
				floor={data?.floor}
				price={data?.price}
				rooms={data?.rooms}
				toilets={data?.toilets}
				area={data?.area}
				wifi={data?.width}
			/>
		</div>
	)
}
export default Each_info_page
