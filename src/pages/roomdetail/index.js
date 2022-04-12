import React from 'react'
import './styles.css'
import { lazy } from 'react'
import { useGetAccomadationById } from '../../queries/useAccomadations.queries'
import { useParams } from 'react-router-dom'

const Infopage = lazy(() => import('../infopage'))

const Each_info_page = () => {
	const params = useParams()
	console.log(params.id)
	const id = params.id
	const { data } = useGetAccomadationById(id)
	console.log(data)

	return (
		<div>
			{data.map((item) => (
				<Infopage
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
		</div>
	)
}
export default Each_info_page
