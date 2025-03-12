import { useScreenSize } from '@/shared/hooks'
import { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

export default function AnimatedScore({ score }: { score: number }) {
	const animatedValue = useRef(new Animated.Value(0)).current
	const prevScore = useRef(score)
	const { isSmallScreen } = useScreenSize()
	const height = isSmallScreen ? 14 : 20

	useEffect(() => {
		animatedValue.setValue(0)
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start()
		prevScore.current = score
	}, [score])

	return (
		<View style={{ height, overflow: 'hidden' }}>
			<Animated.View
				style={{
					transform: [
						{
							translateY: animatedValue.interpolate({
								inputRange: [0, 1],
								outputRange: [0, -20],
							}),
						},
					],
				}}
			>
				<Text style={{ height, fontSize: height }}>{prevScore.current}</Text>
				<Text style={{ height, fontSize: height }}>{score}</Text>
			</Animated.View>
		</View>
	)
}
