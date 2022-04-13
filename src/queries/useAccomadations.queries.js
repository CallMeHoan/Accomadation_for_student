import { useQuery } from 'react-query'
import { API_URL } from '../constants/API'

export const useGetAccomadation = () => {
	return useQuery(['useGetAccomadation'], async () => {
		const res = await fetch(`${API_URL}/accommodations`)
		const response = res.json()
		return response
	})
}

export const useGetAccomadationById = (id) => {
	return useQuery(['useGetAccomadationById'], async () => {
		const res = await fetch(`${API_URL}/accommodations/${id}`)
		const response = res.json()
		return response
	})
}
