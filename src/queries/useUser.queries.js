import { useQuery } from 'react-query'
import API_URL from '../constants/API'

export const usePostUser = () => {
	return (data) => {
		fetch(API_URL, {
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
