import { COLORS } from '@/shared/constants'
import { useScreenSize } from '@/shared/hooks'
import type { Match } from '@/shared/types'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function MatchInfo({ match }: { match: Match }) {
	const { isMediumScreen, isSmallScreen } = useScreenSize()

	return (
		<View
			style={[
				styles.infoBody,
				isMediumScreen && {
					flexDirection: 'column',
				},
			]}
		>
			<View style={styles.infoTeam}>
				<View style={styles.infoPlayers}>
					{match.homeTeam.players.map(player => (
						<View
							style={[
								styles.playerStats,
								isMediumScreen && {
									paddingHorizontal: 8,
								},
								isSmallScreen && { flexDirection: 'column' },
							]}
							key={player.username}
						>
							<View
								style={[
									styles.infoPlayer,
									isMediumScreen && {
										gap: 4,
									},
									isSmallScreen && {
										flexDirection: 'column',
									},
								]}
							>
								<View
									style={[
										styles.playerAvatar,
										isSmallScreen && { width: 32, height: 32 },
									]}
								>
									<Image
										source={require('@/assets/images/avatar-global.png')}
										resizeMode='contain'
										style={isSmallScreen && { width: 32, height: 32 }}
									/>
								</View>
								<Text
									style={[
										styles.infoText,
										isSmallScreen && styles.infoTextSmall,
									]}
								>
									{player.username}
								</Text>
							</View>
							<View style={styles.playerKills}>
								<Text
									style={[
										[styles.infoText, isSmallScreen && styles.infoTextSmall],
										styles.playerKillsText,
										isSmallScreen && {
											textAlign: 'center',
										},
									]}
								>
									<Text style={styles.labelText}>Убийств: </Text>
									{player.kills}
								</Text>
							</View>
						</View>
					))}
				</View>
				<View style={styles.stats}>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Points: </Text>
							{match.homeScore}
						</Text>
					</View>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Место: </Text>
							{match.homeTeam.place}
						</Text>
					</View>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Всего убийств: </Text>
							{match.homeTeam.total_kills}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.infoTeam}>
				<View style={styles.infoPlayers}>
					{match.awayTeam.players.map(player => (
						<View
							style={[
								styles.playerStats,
								isMediumScreen && {
									paddingHorizontal: 8,
								},
								isSmallScreen && { flexDirection: 'column' },
							]}
							key={player.username}
						>
							<View
								style={[
									styles.infoPlayer,
									isSmallScreen && {
										flexDirection: 'column',
									},
								]}
							>
								<View
									style={[
										styles.playerAvatar,
										isSmallScreen && { width: 32, height: 32 },
									]}
								>
									<Image
										source={require('@/assets/images/avatar-global.png')}
										resizeMode='contain'
										style={isSmallScreen && { width: 32, height: 32 }}
									/>
								</View>
								<Text
									style={[
										styles.infoText,
										isSmallScreen && styles.infoTextSmall,
									]}
								>
									{player.username}
								</Text>
							</View>
							<View style={styles.playerKills}>
								<Text
									style={[
										[styles.infoText, isSmallScreen && styles.infoTextSmall],
										styles.playerKillsText,
										isSmallScreen && {
											textAlign: 'center',
										},
									]}
								>
									<Text style={styles.labelText}>Убийств: </Text>
									{player.kills}
								</Text>
							</View>
						</View>
					))}
				</View>
				<View style={styles.stats}>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Points: </Text>
							{match.awayScore}
						</Text>
					</View>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Место: </Text>
							{match.awayTeam.place}
						</Text>
					</View>
					<View style={styles.stat}>
						<Text
							style={[styles.infoText, isSmallScreen && styles.infoTextSmall]}
						>
							<Text style={styles.labelText}>Всего убийств: </Text>
							{match.awayTeam.total_kills}
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	infoBody: {
		backgroundColor: COLORS.gray,
		borderEndEndRadius: 4,
		borderEndStartRadius: 4,
		padding: 28,
		flexDirection: 'row',
		gap: 32,
	},
	infoTeam: {
		flexDirection: 'column',
		gap: 8,
		flex: 1,
	},
	infoPlayers: {
		flexDirection: 'row',
		gap: 8,
	},
	infoPlayer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	playerAvatar: {
		width: 36,
		height: 36,
	},
	playerKills: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
	},
	playerKillsText: {
		textAlign: 'right',
	},
	playerStats: {
		paddingVertical: 8,
		paddingHorizontal: 24,
		borderRadius: 4,
		backgroundColor: COLORS.lightGray,
		flexDirection: 'row',
		gap: 8,
		flex: 1,
		justifyContent: 'space-between',
	},
	infoText: {
		color: COLORS.text,
		fontSize: 16,
	},
	infoTextSmall: {
		fontSize: 14,
	},
	labelText: {
		color: '#FAFAFA66',
		fontSize: 14,
	},
	stats: {
		backgroundColor: COLORS.lightGray,
		borderRadius: 4,
		paddingVertical: 14,
		paddingHorizontal: 24,
		flexDirection: 'row',
	},
	stat: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
