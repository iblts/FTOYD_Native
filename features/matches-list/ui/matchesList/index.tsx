import { MatchCard } from '@/entities/match'
import { COLORS } from '@/shared/constants'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useMatches } from '../../model/hooks'

export default function MatchesList() {
	const { matches, isLoading } = useMatches()

	if (isLoading) {
		return (
			<View style={styles.list}>
				{new Array(6).fill('').map((_, i) => (
					<View key={i} style={styles.skeletonCard} />
				))}
			</View>
		)
	}

	return (
		<FlatList
			data={matches}
			renderItem={({ item }) => <MatchCard match={item} />}
			keyExtractor={match =>
				match.awayTeam.name + match.homeTeam.name + match.time + match.status
			}
			style={styles.list}
			ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		zIndex: 1,
	},
	skeletonCard: {
		height: 87,
		width: '100%',
		marginBottom: 12,
		backgroundColor: COLORS.gray,
	},
})
