import { useQuery } from 'react-query'
import API_URL from '../constants/API'
export const useGetAccomadation = () => {
	return useQuery([
		['useGetAccomadation'],
		async () => {
			const res = await fetch(API_URL)
			const response = res.json()
			return response
		},
	])
}

export const useGetAccomadationById = (id) => {
	return useQuery([
		['useGetAccomadation'],
		async () => {
			const res = await fetch(`${API_URL}/${id}`)
			const response = res.json()
			return response
		},
	])
}
