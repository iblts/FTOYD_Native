import { COLORS } from '@/shared/constants'
import { useOpen, useScreenSize } from '@/shared/hooks'
import type { Match } from '@/shared/types'
import { IconListArrowDown, IconTeam } from '@/shared/ui'
import IconArrowUp from '@/shared/ui/icons/ArrowUp'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AnimatedScore from '../animatedScore'
import MatchInfo from '../matchInfo'
import MatchStatus from '../matchStatus'

export default function MatchCard({ match }: { match: Match }) {
	const { isOpen, toggleModal } = useOpen()
	const { isSmallScreen } = useScreenSize()

	return (
		<View>
			<TouchableOpacity
				style={[
					styles.match,
					isSmallScreen && {
						padding: 8,
					},
				]}
				onPress={toggleModal}
			>
				<View style={[styles.team, isSmallScreen && { marginHorizontal: 0 }]}>
					<IconTeam size={isSmallScreen ? 28 : undefined} />
					<Text style={styles.teamText}>{match.homeTeam.name}</Text>
				</View>
				<View style={styles.matchInfo}>
					<Text style={styles.matchInfoText}>
						<AnimatedScore score={match.homeScore} /> :{' '}
						<AnimatedScore score={match.awayScore} />
					</Text>
					<MatchStatus status={match.status} />
				</View>
				<View style={styles.wrapper}>
					<View style={[styles.team, isSmallScreen && { marginHorizontal: 0 }]}>
						<Text style={styles.teamText}>{match.awayTeam.name}</Text>
						<IconTeam size={isSmallScreen ? 28 : undefined} />
					</View>
					{isOpen ? <IconArrowUp /> : <IconListArrowDown />}
				</View>
			</TouchableOpacity>
			{isOpen && <MatchInfo match={match} />}
		</View>
	)
}

const styles = StyleSheet.create({
	match: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: COLORS.gray,
		borderRadius: 4,
		paddingHorizontal: 36,
		paddingVertical: 16,
		cursor: 'pointer',
	},
	team: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 14,
	},
	teamText: {
		fontWeight: '600',
		color: COLORS.text,
	},
	matchInfo: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	matchInfoText: {
		fontWeight: '600',
		fontSize: 20,
		lineHeight: 24.2,
		color: COLORS.text,
		marginBottom: 4,
	},
	wrapper: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
	},
})
