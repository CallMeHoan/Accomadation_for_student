import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
	width: '100%',
	height: '600px',
}

const center = {
	lat: 10.850679244208827,
	lng: 106.77202958552236,
}

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8',
	})

	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds()
		map.fitBounds(bounds)
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={16}
			onLoad={onLoad}
			onUnmount={onUnmount}
		></GoogleMap>
	) : (
		<></>
	)
}

export const MyMap = React.memo(Map)
