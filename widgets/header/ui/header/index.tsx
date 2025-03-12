import { FilterButton } from '@/features/filter-matches'
import { useScreenSize } from '@/shared/hooks'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import RefreshButton from '../refreshButton'

export default function Header() {
	const { isSmallScreen, width } = useScreenSize()

	return (
		<View style={[styles.header, isSmallScreen && styles.headerSmall]}>
			<View style={[styles.wrapper, isSmallScreen && styles.wrapperSmall]}>
				<Image
					source={require('@/assets/images/logo.svg')}
					style={[
						styles.logo,
						isSmallScreen && {
							width: width * 0.4,
							height: (width * 0.4) / (257 / 32),
						},
					]}
					resizeMode='contain'
				/>
				<FilterButton />
			</View>
			<RefreshButton />
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 42,
		paddingBottom: 20,
		paddingHorizontal: 20,
	},
	headerSmall: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 16,
		paddingBottom: 32,
		paddingHorizontal: 0,
	},
	wrapper: {
		flexDirection: 'row',
		gap: 24,
		alignItems: 'center',
	},
	wrapperSmall: {
		width: '100%',
		flexDirection: 'column',
		gap: 10,
	},
	logo: {
		width: 257,
		height: 32,
	},
})
