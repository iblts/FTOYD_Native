const WEBSOCKETS_URL = process.env.EXPO_PUBLIC_WEBSOCKETS_URL
const API_URL = process.env.EXPO_PUBLIC_API_BASE_URL

export const ROUTES = {
	HOME: '/',
}

export const API_ROUTES = {
	MATCHES: `${API_URL}/fronttemp`,
	WS_MATCHES: `${WEBSOCKETS_URL}`,
}
