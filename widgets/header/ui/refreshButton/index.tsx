import { useScreenSize } from '@/shared/hooks'
import { Button, IconAlert, IconRefresh } from '@/shared/ui'
import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { useRefresh } from '../../model/hooks'

export default function RefreshButton() {
	const { error, handleRefresh, isFetching } = useRefresh()
	const [rotation] = useState(new Animated.Value(0))
	const { isSmallScreen } = useScreenSize()

	useEffect(() => {
		if (isFetching) {
			Animated.loop(
				Animated.timing(rotation, {
					toValue: 1,
					duration: 2000,
					useNativeDriver: true,
				})
			).start()
		} else {
			rotation.setValue(0)
		}
	}, [isFetching, rotation])

	const spin = rotation.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	})

	return (
		<View style={[styles.body, isSmallScreen && { width: '100%' }]}>
			{error && (
				<View style={[styles.error, isSmallScreen && styles.errorSmall]}>
					<IconAlert />
					<Text
						style={[styles.errorText, isSmallScreen && styles.errorTextSmall]}
					>
						{error}
					</Text>
				</View>
			)}
			<Button
				onPress={handleRefresh}
				disabled={isFetching}
				style={isSmallScreen && { width: '100%' }}
			>
				<Text style={styles.buttonText}>Обновить</Text>
				<Animated.View style={{ transform: [{ rotate: spin }] }}>
					<IconRefresh fill={isFetching ? '#787878' : undefined} />
				</Animated.View>
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	bodySmall: {
		width: '100%',
	},
	error: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 480,
		height: 56,
		borderRadius: 4,
		padding: 16,
		backgroundColor: '#0f1318',
		gap: 10,
	},
	errorSmall: {
		width: '100%',
		height: 40,
	},
	errorText: {
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 21.78,
		color: '#fff',
	},
	errorTextSmall: {
		fontSize: 14,
		lineHeight: 18,
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
		marginRight: 8,
	},
})
