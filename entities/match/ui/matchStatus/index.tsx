import { COLORS } from '@/shared/constants'
import { useScreenSize } from '@/shared/hooks'
import type { MatchStatus } from '@/shared/types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type MatchStatusStyle = 'match_preparing' | 'live' | 'finished'

export default function MatchStatus({ status }: { status: MatchStatus }) {
	const statusKey = status
		.toLowerCase()
		.replaceAll(' ', '_') as MatchStatusStyle
	const { isSmallScreen } = useScreenSize()

	return (
		<View
			style={[
				styles.matchStatus,
				styles[statusKey],
				isSmallScreen && { width: 70 },
			]}
		>
			<Text style={[styles.text, isSmallScreen && { fontSize: 14 }]}>
				{status}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	matchStatus: {
		paddingVertical: 6,
		paddingHorizontal: 2,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontWeight: '600',
		fontSize: 12,
		lineHeight: 14.52,
		color: COLORS.text,
		textAlign: 'center',
	},
	match_preparing: {
		backgroundColor: COLORS.orange,
		width: 112,
	},
	live: {
		backgroundColor: COLORS.green,
		width: 92,
	},
	finished: {
		backgroundColor: COLORS.red,
		width: 92,
	},
})
