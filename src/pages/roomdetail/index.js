import react from 'react'
import './styles.css'
import { Suspense, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAccomadationById } from '../../queries/useAccomadations.queries'

const Infopage = lazy(() => import('../infopage'))

const Each_info_page = () => {
	const params = useParams()
	const id = params.id
	console.log(id)
	const { data } = useGetAccomadationById(1)
	console.log(data)

	return (
		<div>
			<Infopage
				tpe={data?.type}
				image={data?.image}
				property={data?.property}
				description={data?.description}
				title={data?.title}
				full_description={data?.full_description}
				full_property={data?.full_property}
				price={data?.price}
			/>
		</div>
	)
}
export default Each_info_page
