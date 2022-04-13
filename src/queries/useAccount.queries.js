import { useQuery } from 'react-query'
import { API_URL } from '../constants/API'

export const usePostUser = () => {
	return (data) => {
		fetch(`${API_URL}/account`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
	}
}
export const useCreateAccount = () => {
	return (data) => {
		return fetch(`${API_URL}/account`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(console.log)
			.catch((err) => console.log(err))
	}
}
