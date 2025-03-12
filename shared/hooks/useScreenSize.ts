import { useWindowDimensions } from 'react-native'

export const useScreenSize = () => {
	const { width } = useWindowDimensions()
	const isSmallScreen = width < 790
	const isMediumScreen = width < 1800

	return {
		isSmallScreen,
		isMediumScreen,
		width,
	}
}
