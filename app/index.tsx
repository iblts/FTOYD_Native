import { COLORS } from '@/shared/constants'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import 'react-native-reanimated'

import { MatchesList } from '@/features/matches-list'
import { useScreenSize } from '@/shared/hooks'
import { QueryProvider } from '@/shared/providers'
import { Container } from '@/shared/ui'
import { Header } from '@/widgets/header'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/InterVariable.ttf'),
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	const { isSmallScreen } = useScreenSize()

	return (
		<QueryProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Container style={isSmallScreen && { padding: 16 }}>
						<Header />
						<MatchesList />
					</Container>
				</ScrollView>
			</SafeAreaView>
		</QueryProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
})
